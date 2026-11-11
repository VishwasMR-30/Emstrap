import { useEffect, useState } from 'react'
import { MapPin, Camera, Send, RotateCcw, CheckCircle2, Crosshair, Siren } from 'lucide-react'
import LiveMap from '../components/LiveMap'
import { submitForm } from '../api'

const TYPES = [
  { id: 'bls', name: 'Basic Support (BLS)', price: 1000 },
  { id: 'oxygen', name: 'Oxygen Support', price: 1500 },
  { id: 'pregnancy', name: 'Pregnancy Support', price: 2000 },
  { id: 'icu', name: 'ICU / Advanced (ALS)', price: 3500 },
]

const DEFAULT_GPS = [12.9716, 77.5946]
const money = (n) => '₹' + n.toLocaleString('en-IN')
const lerp = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]

export default function Demo() {
  const [mode, setMode] = useState('booking') // booking | capture | alert
  const [step, setStep] = useState(0) // 0 locations, 1 ambulance, 2 summary, 3 booked
  const [pickup, setPickup] = useState('')
  const [drop, setDrop] = useState('')
  const [typeId, setTypeId] = useState('')
  const [gps, setGps] = useState(DEFAULT_GPS)
  const [image, setImage] = useState(null)
  const [log, setLog] = useState([])
  const [phase, setPhase] = useState('idle') // idle | toPickup | toHospital | done
  const [progress, setProgress] = useState(0)
  const [booking, setBooking] = useState(null)
  const [busy, setBusy] = useState(false)
  const [bookError, setBookError] = useState('')

  const type = TYPES.find((t) => t.id === typeId)

  const addLog = (msg) =>
    setLog((l) => [...l, { time: new Date().toLocaleTimeString(), msg }])

  // Points are placed around the captured GPS position
  const hospital = [gps[0] + 0.035, gps[1] + 0.03]
  const ambStart = [gps[0] + 0.03, gps[1] - 0.025]
  const police = [gps[0] + 0.012, gps[1] + 0.015]
  const fire = [gps[0] - 0.02, gps[1] - 0.012]

  let ambulance = ambStart
  if (phase === 'toPickup') ambulance = lerp(ambStart, gps, progress)
  if (phase === 'toHospital') ambulance = lerp(gps, hospital, progress)
  if (phase === 'done') ambulance = hospital

  // Move the ambulance
  useEffect(() => {
    if (phase !== 'toPickup' && phase !== 'toHospital') return
    const id = setInterval(() => setProgress((p) => Math.min(p + 0.05, 1)), 500)
    return () => clearInterval(id)
  }, [phase])

  // React when a leg of the trip finishes
  useEffect(() => {
    if (progress < 1) return
    if (phase === 'toPickup') {
      addLog('Ambulance arrived at pickup location')
      addLog('Patient on board, heading to hospital')
      addLog('Hospital notified: trauma bed prepared')
      setPhase('toHospital')
      setProgress(0)
    } else if (phase === 'toHospital') {
      addLog('Arrived at hospital: patient handover complete')
      setPhase('done')
    }
  }, [progress, phase])

  const captureLocation = () => {
    if (!navigator.geolocation) {
      addLog('Geolocation not supported: using default location')
      return
    }
    navigator.geolocation.getCurrentPosition(
      (p) => {
        setGps([p.coords.latitude, p.coords.longitude])
        addLog('GPS location captured')
      },
      () => addLog('Location permission denied: using default location')
    )
  }

  const onImage = (e) => {
    const f = e.target.files?.[0]
    if (!f) return
    setImage({ name: f.name, url: URL.createObjectURL(f) })
    addLog('Scene image captured')
  }

  const sendAlert = () => {
    addLog('Emergency alert transmitted with GPS' + (image ? ' and scene image' : ''))
    addLog('Police control room notified')
    addLog('Nearest hospital notified')
  }

  const payAndBook = async () => {
    setBusy(true)
    setBookError('')
    try {
      const { booking: b } = await submitForm('/api/bookings', { pickup, drop, typeId })
      setBooking(b)
      addLog(`Booking ${b.id} confirmed: ${b.typeName}`)
      addLog(`Payment of ${money(b.price)} received`)
      addLog('Nearest ambulance matched')
      addLog(`Driver ${b.driver.name} accepted the request`)
      addLog('Ambulance en route to pickup')
      setProgress(0)
      setPhase('toPickup')
      setStep(3)
    } catch (err) {
      setBookError(err.message)
    } finally {
      setBusy(false)
    }
  }

  const reset = () => {
    setMode('booking')
    setStep(0)
    setPickup('')
    setDrop('')
    setTypeId('')
    setGps(DEFAULT_GPS)
    setImage(null)
    setLog([])
    setPhase('idle')
    setProgress(0)
    setBooking(null)
    setBookError('')
  }

  const eta =
    phase === 'toPickup'
      ? `${Math.max(1, Math.ceil(5 * (1 - progress)))} Mins`
      : phase === 'toHospital'
      ? 'Heading to hospital'
      : phase === 'done'
      ? 'Arrived'
      : '5 Mins'

  const tab = (id, label, Icon) => (
    <button
      onClick={() => setMode(id)}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border ${
        mode === id ? 'bg-alert border-alert' : 'glass hover:bg-white/5'
      }`}
    >
      <Icon size={16} /> {label}
    </button>
  )

  return (
    <main className="max-w-6xl mx-auto px-6 pt-28 pb-20">
      <header className="mb-10">
        <span className="inline-flex items-center gap-2 text-xs text-live border border-line rounded-full px-3 py-1 mb-4">
          <span className="w-2 h-2 rounded-full bg-live animate-pulse" /> SIMULATION · DEMO DATA ONLY
        </span>
        <h1 className="font-display text-3xl md:text-4xl font-bold">
          EMSTRAP – Emergency Response Visual Simulation
        </h1>
        <p className="text-slate-400 mt-3">
          Watch EMSTRAP's real-time emergency dispatch and preemption platform in action.
        </p>
      </header>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* 1) Demo simulation */}
        <section className="glass rounded-2xl p-6">
          <h2 className="font-display text-xl font-bold">1) Demo Simulation</h2>
          <p className="text-slate-400 text-sm mt-1 mb-4">Select an option to start the simulation.</p>

          <div className="flex flex-wrap gap-3 mb-6">
            {tab('booking', 'Emergency Booking', Siren)}
            {tab('capture', 'Capture Sample', Camera)}
            {tab('alert', 'Send Alert', Send)}
          </div>

          {mode === 'booking' && (
            <div>
              {step === 0 && (
                <div className="space-y-4">
                  <label className="block text-sm text-slate-300">
                    Pickup Location
                    <input className="input mt-1" value={pickup} onChange={(e) => setPickup(e.target.value)} placeholder="e.g. MG Road, Bengaluru" />
                  </label>
                  <label className="block text-sm text-slate-300">
                    Drop Location
                    <input className="input mt-1" value={drop} onChange={(e) => setDrop(e.target.value)} placeholder="e.g. Nearest hospital" />
                  </label>
                  <button
                    disabled={!pickup.trim() || !drop.trim()}
                    onClick={() => setStep(1)}
                    className="bg-alert px-5 py-2.5 rounded-xl font-semibold disabled:opacity-40"
                  >
                    Next: Select Ambulance
                  </button>
                </div>
              )}

              {step === 1 && (
                <div>
                  <h3 className="font-semibold mb-3">Select Ambulance Type</h3>
                  <div className="space-y-3">
                    {TYPES.map((t) => (
                      <label
                        key={t.id}
                        className={`flex items-center justify-between rounded-xl border px-4 py-3 cursor-pointer ${
                          typeId === t.id ? 'border-live bg-live/10' : 'border-line hover:bg-white/5'
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <input type="radio" name="type" checked={typeId === t.id} onChange={() => setTypeId(t.id)} />
                          {t.name}
                        </span>
                        <span className="font-display text-live">{money(t.price)}</span>
                      </label>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-5">
                    <button onClick={() => setStep(0)} className="glass px-5 py-2.5 rounded-xl">Back</button>
                    <button disabled={!typeId} onClick={() => setStep(2)} className="bg-alert px-5 py-2.5 rounded-xl font-semibold disabled:opacity-40">
                      Next
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3 className="font-semibold mb-3">Booking Summary</h3>
                  <dl className="space-y-2 text-sm">
                    <div className="flex justify-between"><dt className="text-slate-400">From:</dt><dd>{pickup}</dd></div>
                    <div className="flex justify-between"><dt className="text-slate-400">To:</dt><dd>{drop}</dd></div>
                    <div className="flex justify-between"><dt className="text-slate-400">Type:</dt><dd>{type.name}</dd></div>
                    <div className="flex justify-between text-base font-semibold">
                      <dt>Total Cost:</dt><dd className="text-live">{money(type.price)}</dd>
                    </div>
                  </dl>
                  <div className="flex gap-3 mt-5">
                    <button onClick={() => setStep(1)} className="glass px-5 py-2.5 rounded-xl">Back</button>
                    <button onClick={payAndBook} disabled={busy} className="bg-alert px-5 py-2.5 rounded-xl font-semibold disabled:opacity-60">{busy ? 'Booking...' : 'Pay & Book'}</button>
                    {bookError && <p className="text-alert text-sm self-center">{bookError}</p>}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="rounded-xl border border-live/40 bg-live/5 p-5">
                  <CheckCircle2 className="text-live mb-2" />
                  <h3 className="font-display text-xl font-bold">Driver Booked!</h3>
                  <p className="text-slate-400 text-sm">Your ambulance is dispatched</p>
                  <ul className="mt-4 space-y-1 text-sm">
                    <li><span className="text-slate-400">Booking ID:</span> {booking?.id}</li>
                    <li><span className="text-slate-400">Driver:</span> {booking?.driver.name}</li>
                    <li><span className="text-slate-400">Contact:</span> {booking?.driver.phone}</li>
                    <li><span className="text-slate-400">Vehicle:</span> {booking?.driver.vehicle}</li>
                    <li><span className="text-slate-400">ETA:</span> {eta}</li>
                  </ul>
                  <button onClick={reset} className="mt-5 glass px-5 py-2.5 rounded-xl">Reset Demo</button>
                </div>
              )}
            </div>
          )}

          {mode === 'capture' && (
            <div className="space-y-4">
              <p className="text-sm text-slate-400">Capture the emergency scene: your GPS position and a photo.</p>
              <button onClick={captureLocation} className="flex items-center gap-2 bg-alert px-5 py-2.5 rounded-xl font-semibold">
                <Crosshair size={16} /> Capture GPS Location
              </button>
              <label className="block text-sm text-slate-300">
                Scene Image
                <input type="file" accept="image/*" onChange={onImage} className="input mt-1" />
              </label>
            </div>
          )}

          {mode === 'alert' && (
            <div className="space-y-4">
              <p className="text-sm text-slate-400">
                Transmit the captured location{image ? ' and scene image' : ''} to police control and the nearest hospital.
              </p>
              <button onClick={sendAlert} className="flex items-center gap-2 bg-alert px-5 py-2.5 rounded-xl font-semibold">
                <Send size={16} /> Send Alert
              </button>
            </div>
          )}

          <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-line text-sm">
            <div>
              <p className="text-slate-500 text-xs">Type</p>
              <p>{type ? type.name : '–'}</p>
            </div>
            <div>
              <p className="text-slate-500 text-xs">GPS</p>
              <p>{gps[0].toFixed(4)}, {gps[1].toFixed(4)}</p>
            </div>
            <div>
              <p className="text-slate-500 text-xs">Image</p>
              {image ? <img src={image.url} alt="Captured scene" className="w-14 h-14 object-cover rounded-lg" /> : <p>Not captured</p>}
            </div>
          </div>
        </section>

        {/* 2) System log */}
        <section className="glass rounded-2xl p-6 flex flex-col">
          <h2 className="font-display text-xl font-bold mb-4">2) System Log</h2>
          <div className="flex-1 min-h-[260px] max-h-[420px] overflow-y-auto rounded-xl bg-black/30 p-4 font-mono text-xs space-y-2">
            {log.length === 0 && <p className="text-slate-500">Awaiting events...</p>}
            {log.map((l, i) => (
              <p key={i}>
                <span className="text-live">{l.time}</span> <span className="text-slate-300">{l.msg}</span>
              </p>
            ))}
          </div>
          <button onClick={reset} className="mt-4 self-start flex items-center gap-2 glass px-5 py-2.5 rounded-xl text-sm">
            <RotateCcw size={14} /> Reset Simulation
          </button>
        </section>
      </div>

      {/* 3) City view */}
      <section className="mt-6 glass rounded-2xl p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <h2 className="font-display text-xl font-bold">3) City View &amp; Live Tracking</h2>
          <div className="flex flex-wrap gap-4 text-xs text-slate-400">
            <span>🆘 Incident</span>
            <span>🚑 Ambulance</span>
            <span>👮 Police</span>
            <span>🏥 Hospital</span>
            <span>🚒 Fire</span>
          </div>
        </div>
        <LiveMap
          pickup={gps}
          hospital={hospital}
          ambulance={ambulance}
          police={police}
          fire={fire}
          route={[ambStart, gps, hospital]}
        />
        <p className="text-xs text-slate-500 mt-3 flex items-center gap-1">
          <MapPin size={12} /> Simulation with demo data. Book an ambulance above to watch the live tracking.
        </p>
      </section>
    </main>
  )
}
