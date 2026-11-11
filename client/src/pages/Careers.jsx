import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Cpu, Stethoscope, CheckCircle2 } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import Field from '../components/Field'
import RoleModal from '../components/RoleModal'
import { roles } from '../data/roles'
import { submitForm } from '../api'

const culture = [
  { n: '01', icon: Heart, title: 'True Real-World Impact', text: 'Direct contribution to public safety and emergency health response across smart cities.' },
  { n: '02', icon: Cpu, title: 'Hard Engineering Problems', text: 'Low-latency Go microservices, sub-second WebSockets, and spatial A* routing models.' },
  { n: '03', icon: Stethoscope, title: 'Comprehensive Care', text: 'Premium healthcare coverage for you and your family, mental wellness, and flexible hybrid working.' },
]

const empty = { name: '', email: '', phone: '', role: '', link: '', note: '' }

export default function Careers() {
  const [active, setActive] = useState(null)
  const [form, setForm] = useState(empty)
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await submitForm('/api/careers', { ...form, source: 'main-form' })
      setSent(true)
      setForm(empty)
      setError('')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="px-6 py-24 bg-[radial-gradient(ellipse_at_top,#12203d,transparent_60%)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-live text-xs tracking-[0.25em] mb-4">CAREERS AT EMSTRAP</p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl md:text-6xl font-bold leading-tight"
          >
            Build Technology That <span className="text-alert">Saves Lives.</span>
          </motion.h1>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Join India's next-generation emergency response intelligence grid. Work on distributed
            systems, real-time spatial routing, and hospital telemetry where milliseconds count.
          </p>
          <a href="#positions" className="inline-block mt-8 bg-alert px-6 py-3 rounded-xl font-semibold">Join The Team</a>
        </div>
      </section>

      {/* Culture */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <SectionTitle
          label="CULTURE & IMPACT"
          title="Where Your Code Has a Heartbeat."
          text={'We don\u2019t build ad trackers or clickbait algorithms. At EMSTRAP, every pull request directly clears ambulance gridlocks, notifies trauma emergency rooms, and secures the clinical \u201cGolden Hour\u201d for real people in critical distress.'}
        />
        <div className="grid md:grid-cols-3 gap-6">
          {culture.map(({ n, icon: Icon, title, text }, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-8"
            >
              <div className="flex items-center justify-between mb-5">
                <Icon className="text-alert" />
                <span className="font-display text-live text-sm">{n}</span>
              </div>
              <h3 className="font-display text-lg font-bold">{title}</h3>
              <p className="text-slate-400 text-sm mt-2">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Open positions */}
      <section id="positions" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-16">
        <SectionTitle label="OPPORTUNITIES" title="Open Positions" text={`${roles.length} Active Roles in Bengaluru & Remote`} />
        <div className="space-y-5">
          {roles.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5 hover:border-live/50 transition-colors"
            >
              <div className="flex-1">
                <p className="text-xs text-live tracking-wide">{r.dept} • {r.level} • {r.location}</p>
                <h3 className="font-display text-xl font-bold mt-2">{r.title}</h3>
                <p className="text-slate-400 text-sm mt-2">{r.summary}</p>
              </div>
              <button onClick={() => setActive(r)} className="bg-alert px-5 py-3 rounded-xl font-semibold whitespace-nowrap hover:opacity-90">
                View Role &amp; Apply
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Direct intake */}
      <section id="apply" className="max-w-3xl mx-auto px-6 py-20 scroll-mt-16">
        <SectionTitle label="DIRECT INTAKE" title="Submit Your Application" text="Direct review by our core engineering and operations leads." />
        {sent ? (
          <div className="glass rounded-2xl p-10 text-center">
            <CheckCircle2 className="mx-auto text-live mb-3" size={44} />
            <h3 className="font-display text-xl font-bold">Application Sent</h3>
            <p className="text-slate-400 text-sm mt-2">Thank you. Our team will review it and reply soon.</p>
            <button onClick={() => setSent(false)} className="mt-6 glass px-6 py-2.5 rounded-xl">Send another</button>
          </div>
        ) : (
          <form onSubmit={submit} className="glass rounded-2xl p-6 sm:p-8 space-y-4">
            <Field label="Name" required><input className="input" name="name" value={form.name} onChange={change} required /></Field>
            <Field label="Email" required><input className="input" type="email" name="email" value={form.email} onChange={change} required /></Field>
            <Field label="Phone" required><input className="input" name="phone" value={form.phone} onChange={change} pattern="[0-9+\s\-]{10,15}" title="Enter a valid phone number" required /></Field>
            <Field label="Role" required>
              <select className="input" name="role" value={form.role} onChange={change} required>
                <option value="" disabled>Select Role</option>
                {roles.map((r) => <option key={r.id} value={r.title} className="bg-card">{r.title}</option>)}
                <option value="General Open Application" className="bg-card">General Open Application</option>
              </select>
            </Field>
            <Field label="Resume / Portfolio Link" required><input className="input" type="url" name="link" value={form.link} onChange={change} placeholder="https://" required /></Field>
            <Field label="Brief Note"><textarea className="input h-28" name="note" value={form.note} onChange={change} /></Field>
            {error && <p className="text-alert text-sm">{error}</p>}
            <button disabled={loading} className="w-full bg-alert py-3 rounded-xl font-semibold hover:opacity-90 disabled:opacity-60">
              {loading ? 'Sending...' : 'Send Application'}
            </button>
          </form>
        )}
      </section>

      {active && <RoleModal role={active} onClose={() => setActive(null)} />}
    </main>
  )
}
