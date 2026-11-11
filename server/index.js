import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { initStore, save, findById, list, isCollection } from './store.js'

const app = express()
const PORT = process.env.PORT || 5000
const origins = (process.env.CLIENT_ORIGIN || 'http://localhost:5173').split(',').map((s) => s.trim())

app.use(cors({ origin: origins }))
app.use(express.json({ limit: '50kb' }))

// Simple rate limit: 60 requests per minute per IP
const hits = new Map()
app.use('/api', (req, res, next) => {
  const now = Date.now()
  const recent = (hits.get(req.ip) || []).filter((t) => now - t < 60000)
  if (recent.length >= 60) return res.status(429).json({ error: 'Too many requests. Please slow down.' })
  recent.push(now)
  hits.set(req.ip, recent)
  next()
})

// ---------- helpers ----------
const clean = (v, max = 2000) => (typeof v === 'string' ? v.trim().slice(0, max) : '')
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
const isPhone = (v) => /^[0-9+\s-]{10,15}$/.test(v)
const isUrl = (v) => /^https?:\/\/\S+$/.test(v)
const fail = (res, msg, code = 400) => res.status(code).json({ error: msg })

const AMBULANCE_TYPES = {
  bls: { name: 'Basic Support (BLS)', price: 1000 },
  oxygen: { name: 'Oxygen Support', price: 1500 },
  pregnancy: { name: 'Pregnancy Support', price: 2000 },
  icu: { name: 'ICU / Advanced (ALS)', price: 3500 },
}
const DRIVER = { name: 'Ramesh Kumar', phone: '+91 98765 43210', vehicle: 'KA 03 AA 4829' }

// ---------- routes ----------
app.get('/', (req, res) =>
  res.json({ name: 'EMSTRAP API', status: 'running', message: 'This is the backend. The website is served separately.', health: '/api/health' })
)

app.get('/api/health', (req, res) => res.json({ ok: true }))

app.post('/api/contact', async (req, res, next) => {
  try {
    const name = clean(req.body.name, 100)
    const email = clean(req.body.email, 150)
    const message = clean(req.body.message)
    if (!name) return fail(res, 'Please enter your name.')
    if (!isEmail(email)) return fail(res, 'Please enter a valid email address.')
    if (!message) return fail(res, 'Please enter a message.')
    const phone = clean(req.body.phone, 20)
    if (phone && !isPhone(phone)) return fail(res, 'Please enter a valid phone number.')
    const doc = await save('contacts', { name, email, message, org: clean(req.body.org, 150), phone })
    res.status(201).json({ ok: true, id: doc.id })
  } catch (e) { next(e) }
})

app.post('/api/careers', async (req, res, next) => {
  try {
    const name = clean(req.body.name, 100)
    const email = clean(req.body.email, 150)
    const phone = clean(req.body.phone, 20)
    const role = clean(req.body.role, 200)
    const link = clean(req.body.link, 500)
    if (!name) return fail(res, 'Please enter your name.')
    if (!isEmail(email)) return fail(res, 'Please enter a valid email address.')
    if (!isPhone(phone)) return fail(res, 'Please enter a valid phone number.')
    if (!role) return fail(res, 'Please select a role.')
    if (!isUrl(link)) return fail(res, 'Please enter a valid resume or portfolio link starting with http.')
    const exp = req.body.experience
    const doc = await save('careers', {
      name, email, phone, role, link,
      note: clean(req.body.note),
      experience: exp === '' || exp == null ? null : Number(exp),
      source: clean(req.body.source, 30),
    })
    res.status(201).json({ ok: true, id: doc.id })
  } catch (e) { next(e) }
})

// Briefing / demo requests from the solution pages
app.post('/api/briefings', async (req, res, next) => {
  try {
    const email = clean(req.body.email, 150)
    const phone = clean(req.body.phone, 20)
    const name = clean(req.body.name, 100)
    const org = clean(req.body.org, 200)
    // Any other plain text fields (pickup, fleetSize, ...) are kept as "details"
    const known = ['solution', 'name', 'org', 'email', 'phone', 'needs']
    const details = {}
    for (const [k, v] of Object.entries(req.body)) {
      if (known.includes(k) || typeof v !== 'string' || !/^[a-zA-Z]{1,30}$/.test(k)) continue
      if (Object.keys(details).length >= 10) break
      details[k] = clean(v, 300)
    }
    if (!name && !org && !Object.keys(details).length) return fail(res, 'Please fill in the form.')
    if (email && !isEmail(email)) return fail(res, 'Please enter a valid email address.')
    if (!isPhone(phone)) return fail(res, 'Please enter a valid phone number.')
    const doc = await save('briefings', {
      solution: clean(req.body.solution, 80), name, org, email, phone, needs: clean(req.body.needs), details,
    })
    res.status(201).json({ ok: true, id: doc.id })
  } catch (e) { next(e) }
})

app.post('/api/bookings', async (req, res, next) => {
  try {
    const pickup = clean(req.body.pickup, 200)
    const drop = clean(req.body.drop, 200)
    const type = AMBULANCE_TYPES[req.body.typeId]
    if (!pickup || !drop) return fail(res, 'Pickup and drop locations are required.')
    if (!type) return fail(res, 'Please choose a valid ambulance type.')
    // Price is calculated on the server so it cannot be changed by the browser
    const booking = await save('bookings', {
      pickup, drop,
      typeId: req.body.typeId,
      typeName: type.name,
      price: type.price,
      driver: DRIVER,
      status: 'confirmed',
    })
    res.status(201).json({ ok: true, booking })
  } catch (e) { next(e) }
})

app.get('/api/bookings/:id', async (req, res, next) => {
  try {
    const booking = await findById('bookings', clean(req.params.id, 30))
    if (!booking) return fail(res, 'Booking not found.', 404)
    res.json({ ok: true, booking })
  } catch (e) { next(e) }
})

app.post('/api/sos', async (req, res, next) => {
  try {
    const { lat, lng } = req.body
    const hasLocation = typeof lat === 'number' && typeof lng === 'number' &&
      Math.abs(lat) <= 90 && Math.abs(lng) <= 180
    const sos = await save('sos', { lat: hasLocation ? lat : null, lng: hasLocation ? lng : null, status: 'received' })
    res.status(201).json({ ok: true, sos })
  } catch (e) { next(e) }
})

// Read saved data (for you, to prove the database works). Needs ADMIN_KEY in .env
app.get('/api/admin/:collection', async (req, res, next) => {
  try {
    const key = process.env.ADMIN_KEY
    if (!key) return fail(res, 'Admin access is not configured.', 403)
    if (req.get('x-admin-key') !== key && req.query.key !== key) return fail(res, 'Wrong admin key.', 401)
    if (!isCollection(req.params.collection)) return fail(res, 'Unknown collection.', 404)
    res.json({ ok: true, items: await list(req.params.collection) })
  } catch (e) { next(e) }
})

// ---------- errors ----------
app.use('/api', (req, res) => fail(res, 'Not found.', 404))
app.use((err, req, res, next) => {
  if (err.type === 'entity.parse.failed') return fail(res, 'Invalid request data.')
  console.error(err)
  res.status(500).json({ error: 'Server error. Please try again.' })
})

initStore()
  .then(() => app.listen(PORT, () => console.log(`EMSTRAP API running on http://localhost:${PORT}`)))
  .catch((err) => { console.error('Could not start:', err.message); process.exit(1) })
