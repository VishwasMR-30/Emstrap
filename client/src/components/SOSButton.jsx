import { useRef, useState } from 'react'
import { submitForm } from '../api'

const HOLD_MS = 3000

export default function SOSButton() {
  const [progress, setProgress] = useState(0)
  const [status, setStatus] = useState('')
  const timer = useRef(null)
  const start = useRef(0)

  const send = async (lat, lng) => {
    try {
      const { sos } = await submitForm('/api/sos', { lat, lng })
      setStatus(
        lat != null
          ? `SOS sent! Alert ${sos.id}. Location: ${lat.toFixed(4)}, ${lng.toFixed(4)}`
          : `SOS sent! Alert ${sos.id} (location unavailable)`
      )
    } catch (err) {
      setStatus('SOS failed: ' + err.message)
    }
    setTimeout(() => setStatus(''), 6000)
  }

  const trigger = () => {
    setStatus('Getting your location...')
    if (!navigator.geolocation) {
      send(null, null)
      return
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => send(pos.coords.latitude, pos.coords.longitude),
      () => send(null, null),
      { timeout: 8000 }
    )
  }

  const down = () => {
    start.current = Date.now()
    timer.current = setInterval(() => {
      const p = Math.min(((Date.now() - start.current) / HOLD_MS) * 100, 100)
      setProgress(p)
      if (p >= 100) {
        clearInterval(timer.current)
        setProgress(0)
        trigger()
      }
    }, 30)
  }

  const up = () => {
    clearInterval(timer.current)
    setProgress(0)
  }

  const r = 30
  const c = 2 * Math.PI * r

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {status && <div className="glass rounded-xl px-4 py-2 text-xs max-w-[220px]">{status}</div>}
      <button
        onMouseDown={down} onMouseUp={up} onMouseLeave={up}
        onTouchStart={down} onTouchEnd={up}
        aria-label="Hold for 3 seconds to send SOS"
        className="relative w-16 h-16 rounded-full bg-alert font-display font-bold shadow-[0_0_30px_rgba(255,59,78,0.6)] select-none"
      >
        <svg className="absolute inset-0 -rotate-90" viewBox="0 0 70 70">
          <circle cx="35" cy="35" r={r} fill="none" stroke="white" strokeWidth="4"
            strokeDasharray={c} strokeDashoffset={c - (progress / 100) * c} />
        </svg>
        SOS
      </button>
      <span className="text-[10px] text-slate-500">Hold 3 sec</span>
    </div>
  )
}
