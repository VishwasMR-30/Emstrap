import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Activity, Flame, Users, Clock, FileText, Radio, MapPin, Siren, Bell, Zap,
  ShieldCheck, Stethoscope, CheckCircle2, X as XIcon, ArrowRight,
} from 'lucide-react'
import Field from './Field'
import { submitForm } from '../api'

const icons = [ShieldCheck, Activity, Flame, Users, Clock, FileText, Radio, MapPin, Siren, Bell, Zap, Stethoscope]

export function Panel({ panel }) {
  return (
    <div className="glass rounded-2xl p-6">
      {panel.badge && (
        <p className="inline-flex items-center gap-2 text-xs text-live mb-3">
          <span className="w-2 h-2 rounded-full bg-live animate-pulse" /> {panel.badge}
        </p>
      )}
      <h3 className="font-display text-lg font-bold">{panel.title}</h3>
      {panel.text && <p className="text-slate-400 text-sm mt-2">{panel.text}</p>}
      {panel.rows && (
        <dl className="mt-4 divide-y divide-line text-sm">
          {panel.rows.map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4 py-2">
              <dt className="text-slate-400">{k}</dt>
              <dd className="text-right">{v}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  )
}

export function Cards({ section }) {
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {section.items.map((it, i) => {
          const Icon = icons[i % icons.length]
          return (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-alert/10 flex items-center justify-center">
                  <Icon className="text-alert" size={20} />
                </div>
                {it.tag && <span className="text-[10px] tracking-widest text-live border border-line rounded-full px-3 py-1">{it.tag}</span>}
              </div>
              {it.for && <p className="text-xs text-slate-500 tracking-widest mb-1">{it.for}</p>}
              <h3 className="font-display text-lg font-bold">{it.t}</h3>
              {it.d && <p className="text-slate-400 text-sm mt-2">{it.d}</p>}
              {it.bullets && (
                <ul className="mt-3 space-y-1 text-sm text-slate-400 list-disc pl-5">
                  {it.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              )}
              {it.link && (
                <Link to={it.link} className="mt-auto pt-4 text-sm font-semibold text-alert hover:underline">
                  {it.cta} →
                </Link>
              )}
            </motion.div>
          )
        })}
      </div>
      {section.callout && (
        <div className="glass rounded-2xl p-6 mt-6 border-live/30">
          <span className="text-[10px] tracking-widest text-live border border-line rounded-full px-3 py-1">{section.callout.tag}</span>
          <h3 className="font-display text-lg font-bold mt-3">{section.callout.title}</h3>
          <p className="text-slate-400 text-sm mt-1">{section.callout.text}</p>
        </div>
      )}
    </>
  )
}

export function List({ section }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {section.items.map((it) => (
        <div key={it.t} className="glass rounded-xl p-5 flex gap-3">
          <CheckCircle2 className="text-live shrink-0 mt-0.5" size={20} />
          <div>
            <h3 className="font-semibold">{it.t}</h3>
            {it.d && <p className="text-slate-400 text-sm mt-1">{it.d}</p>}
          </div>
        </div>
      ))}
    </div>
  )
}

export function Steps({ section }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {section.items.map((it, i) => (
        <motion.div
          key={it.t}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: (i % 3) * 0.08 }}
          className="glass rounded-2xl p-6"
        >
          <p className="text-xs text-live tracking-widest">STEP {String(i + 1).padStart(2, '0')}</p>
          <h3 className="font-display text-lg font-bold mt-2">{it.t}</h3>
          {it.d && <p className="text-slate-400 text-sm mt-1">{it.d}</p>}
        </motion.div>
      ))}
    </div>
  )
}

export function Problem({ section }) {
  return (
    <div className="grid md:grid-cols-2 gap-3">
      {section.items.map((t) => (
        <div key={t} className="glass rounded-xl px-5 py-3 flex items-center gap-3 text-sm">
          <XIcon className="text-alert shrink-0" size={18} /> {t}
        </div>
      ))}
    </div>
  )
}

export function Checks({ section }) {
  return (
    <div className={`grid gap-8 ${section.rows ? 'lg:grid-cols-2' : ''}`}>
      <div>
        {section.intro && <p className="text-slate-300 mb-3">{section.intro}</p>}
        <ul className="space-y-3">
          {section.items.map((it) => {
            const t = typeof it === 'string' ? it : it.t
            const d = typeof it === 'string' ? '' : it.d
            return (
              <li key={t} className="flex gap-3">
                <CheckCircle2 className="text-live shrink-0 mt-0.5" size={18} />
                <span>
                  {t}
                  {d && <span className="block text-slate-400 text-sm">{d}</span>}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
      {section.rows && <Panel panel={{ title: section.rowsTitle, rows: section.rows }} />}
    </div>
  )
}

export function Chips({ section }) {
  return (
    <div className="flex flex-wrap gap-3">
      {section.items.map((t) => (
        <span key={t} className="glass rounded-full px-5 py-2 text-sm">{t}</span>
      ))}
    </div>
  )
}

export function Compare({ section }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {[section.left, section.right].map((col, idx) => (
        <div key={col.title} className={`glass rounded-2xl p-6 ${idx === 1 ? 'border-live/40' : ''}`}>
          <h3 className="font-display text-lg font-bold mb-4">{col.title}</h3>
          <ol className="space-y-2 text-sm">
            {col.items.map((t, i) => (
              <li key={t + i} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-alert/10 text-alert text-xs flex items-center justify-center shrink-0">{i + 1}</span>
                {t}
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  )
}

export function Plans({ section }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {section.items.map((p) => (
        <div key={p.t} className={`glass rounded-2xl p-6 flex flex-col ${p.featured ? 'border-live' : ''}`}>
          {p.featured && <span className="self-start text-[10px] tracking-widest text-live border border-line rounded-full px-3 py-1 mb-3">MOST POPULAR</span>}
          <p className="text-xs text-slate-500 tracking-widest">{p.sub}</p>
          <h3 className="font-display text-xl font-bold mt-1">{p.t}</h3>
          <ul className="mt-4 space-y-2 text-sm flex-1">
            {p.bullets.map((b) => (
              <li key={b} className="flex gap-2"><CheckCircle2 className="text-live shrink-0" size={16} /> {b}</li>
            ))}
          </ul>
          <p className="text-xs text-slate-500 mt-4">Ideal for: {p.ideal}</p>
          <a href="#briefing" className="mt-4 inline-flex items-center justify-center gap-2 bg-alert px-4 py-2.5 rounded-xl font-semibold text-sm">
            Request a Demo <ArrowRight size={14} />
          </a>
        </div>
      ))}
    </div>
  )
}

export function BriefingForm({ id, slug, form }) {
  const [values, setValues] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  const change = (e) => setValues({ ...values, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await submitForm('/api/briefings', { solution: form.solution || slug, ...values })
      setSent(true)
      setValues({})
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return (
      <div id={id} className="glass rounded-2xl p-10 text-center scroll-mt-20">
        <CheckCircle2 className="mx-auto text-live mb-3" size={44} />
        <h3 className="font-display text-xl font-bold">Request Received</h3>
        <p className="text-slate-400 text-sm mt-2">Thank you. Our team will contact you shortly.</p>
        <button onClick={() => setSent(false)} className="mt-6 glass px-6 py-2.5 rounded-xl">Send another</button>
      </div>
    )
  }

  return (
    <form id={id} onSubmit={submit} className="glass rounded-2xl p-6 sm:p-8 space-y-4 scroll-mt-20">
      {form.label && <p className="text-xs text-live tracking-widest">{form.label}</p>}
      <h3 className="font-display text-xl font-bold">{form.title}</h3>
      <p className="text-slate-400 text-sm -mt-2">{form.text}</p>
      {form.fields.map(([key, label, type, options]) => (
        <Field key={key} label={label} required={type !== 'textarea'}>
          {type === 'textarea' ? (
            <textarea className="input h-24" name={key} value={values[key] || ''} onChange={change} />
          ) : type === 'select' ? (
            <select className="input" name={key} value={values[key] || ''} onChange={change} required>
              <option value="" disabled>Select</option>
              {options.map((o) => <option key={o} value={o} className="bg-card">{o}</option>)}
            </select>
          ) : (
            <input
              className="input" type={type} name={key} value={values[key] || ''} onChange={change} required
              {...(type === 'tel' ? { pattern: '[0-9+\\s\\-]{10,15}', title: 'Enter a valid phone number' } : {})}
              {...(type === 'number' ? { min: 1 } : {})}
            />
          )}
        </Field>
      ))}
      {error && <p className="text-alert text-sm">{error}</p>}
      <button disabled={loading} className="w-full bg-alert py-3 rounded-xl font-semibold hover:opacity-90 disabled:opacity-60">
        {loading ? 'Submitting...' : form.submit || 'Submit Request'}
      </button>
    </form>
  )
}
