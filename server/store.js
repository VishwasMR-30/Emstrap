// Storage layer: uses MongoDB when MONGODB_URI is set, otherwise a local JSON file.
// The rest of the server does not care which one is used.
import fs from 'fs'
import path from 'path'
import crypto from 'crypto'
import { fileURLToPath } from 'url'
import mongoose from 'mongoose'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_DIR = path.join(__dirname, 'data')
const DB_FILE = path.join(DATA_DIR, 'db.json')

const COLLECTIONS = ['contacts', 'careers', 'bookings', 'sos', 'briefings']
const PREFIX = { contacts: 'MSG', careers: 'APP', bookings: 'EMS', sos: 'SOS', briefings: 'BRF' }

let useMongo = false
const models = {}

export const isCollection = (name) => COLLECTIONS.includes(name)

export async function initStore() {
  const uri = process.env.MONGODB_URI
  if (uri) {
    await mongoose.connect(uri)
    for (const name of COLLECTIONS) {
      models[name] = mongoose.model(
        name,
        new mongoose.Schema({ id: { type: String, index: true } }, { strict: false })
      )
    }
    useMongo = true
    console.log('Database: MongoDB connected')
  } else {
    fs.mkdirSync(DATA_DIR, { recursive: true })
    if (!fs.existsSync(DB_FILE)) {
      fs.writeFileSync(DB_FILE, JSON.stringify(Object.fromEntries(COLLECTIONS.map((c) => [c, []])), null, 2))
    }
    console.log('Database: local file server/data/db.json (set MONGODB_URI to use MongoDB)')
  }
}

const readFile = () => JSON.parse(fs.readFileSync(DB_FILE, 'utf8'))
const writeFile = (db) => fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2))

const newId = (collection) => `${PREFIX[collection]}-${crypto.randomBytes(3).toString('hex').toUpperCase()}`

export async function save(collection, data) {
  const doc = { id: newId(collection), ...data, createdAt: new Date().toISOString() }
  if (useMongo) {
    await models[collection].create(doc)
  } else {
    const db = readFile()
    db[collection] = db[collection] || []
    db[collection].push(doc)
    writeFile(db)
  }
  return doc
}

export async function findById(collection, id) {
  if (useMongo) {
    const d = await models[collection].findOne({ id }).lean()
    if (d) delete d._id, delete d.__v
    return d
  }
  return (readFile()[collection] || []).find((d) => d.id === id) || null
}

export async function list(collection) {
  if (useMongo) {
    const docs = await models[collection].find().sort({ createdAt: -1 }).lean()
    return docs.map(({ _id, __v, ...rest }) => rest)
  }
  return [...(readFile()[collection] || [])].reverse()
}
