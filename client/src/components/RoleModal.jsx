import { useEffect, useState } from 'react'
import { X, CheckCircle2 } from 'lucide-react'
import Field from './Field'
import { perks } from '../data/roles'
import { submitForm } from '../api'

const empty = { name: '', email: '', phone: '', experience: '', link: '', note: '' }

export default function RoleModal({ role, onClose }) {
  const [tab, setTab] = useState('info')
  const [form, setForm] = useState(empty)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await submitForm('/api/careers', { ...form, role: role.title, source: 'role-popup' })
      setDone(true)
      setError('')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const List = ({ title, items }) => (
    <div className="mt-6">
      <h4 className="font-display font-bold mb-2">{title}</h4>
      <ul className="space-y-1 text-sm text-slate-400 list-disc pl-5">
        {items.map((i) => <li key={i}>{i}</li>)}
      </ul>
    </div>
  )

  return (
    <div className="fixed inset-0 z-[60] bg-black/70 flex items-start sm:items-center justify-center p-4 overflow-y-auto" onClick={onClose}>
      <div className="glass rounded-2xl w-full max-w-2xl p-6 sm:p-8 relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 text-slate-400 hover:text-white">
          <X />
        </button>

        <p className="text-xs text-live tracking-widest">{role.dept} • {role.level}</p>
        <h3 className="font-display text-2xl font-bold mt-1 pr-8">{role.title}</h3>
        <p className="text-sm text-slate-500 mt-1">{role.location}</p>

        <div className="flex gap-2 mt-5">
          {[['info', 'Role Information'], ['apply', 'Apply for this Position']].map(([id, label]) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold border ${tab === id ? 'bg-alert border-alert' : 'border-line hover:bg-white/5'}`}
            >
              {label}
            </button>
          ))}
        </div>

        {tab === 'info' && (
          <div>
            <div className="mt-6">
              <h4 className="font-display font-bold mb-2">About the Role</h4>
              <p className="text-sm text-slate-400">{role.about}</p>
            </div>
            <List title="Key Responsibilities" items={role.responsibilities} />
            <List title="What We Look For" items={role.requirements} />
            <div className="mt-6">
              <h4 className="font-display font-bold mb-2">Core Tools &amp; Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {role.tools.map((t) => (
                  <span key={t} className="text-xs border border-line rounded-full px-3 py-1 text-live">{t}</span>
                ))}
              </div>
            </div>
            <List title="What We Offer" items={perks} />
            <button onClick={() => setTab('apply')} className="mt-8 bg-alert px-6 py-3 rounded-xl font-semibold">
              Apply for this Position
            </button>
          </div>
        )}

        {tab === 'apply' && !done && (
          <form onSubmit={submit} className="mt-6 space-y-4">
            <p className="text-xs text-slate-500 tracking-widest">SUBMITTING APPLICATION FOR</p>
            <p className="font-semibold -mt-3">{role.title}</p>
            <Field label="Full Name" required><input className="input" name="name" value={form.name} onChange={change} required /></Field>
            <Field label="Email Address" required><input className="input" type="email" name="email" value={form.email} onChange={change} required /></Field>
            <Field label="Contact Phone" required><input className="input" name="phone" value={form.phone} onChange={change} pattern="[0-9+\s\-]{10,15}" title="Enter a valid phone number" required /></Field>
            <Field label="Years of Relevant Experience" required><input className="input" type="number" min="0" max="50" name="experience" value={form.experience} onChange={change} required /></Field>
            <Field label="Resume / LinkedIn / GitHub Portfolio Link" required><input className="input" type="url" name="link" value={form.link} onChange={change} placeholder="https://" required /></Field>
            <Field label="Brief Introduction / Note"><textarea className="input h-24" name="note" value={form.note} onChange={change} /></Field>
            {error && <p className="text-alert text-sm">{error}</p>}
            <div className="flex gap-3">
              <button type="button" onClick={() => setTab('info')} className="glass px-5 py-2.5 rounded-xl">Review Details</button>
              <button disabled={loading} className="bg-alert px-6 py-2.5 rounded-xl font-semibold disabled:opacity-60">
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        )}

        {tab === 'apply' && done && (
          <div className="text-center py-10">
            <CheckCircle2 className="mx-auto text-live mb-3" size={44} />
            <h4 className="font-display text-xl font-bold">Application Submitted</h4>
            <p className="text-sm text-slate-400 mt-2">Thank you. Our team will review your application and get back to you.</p>
            <button onClick={onClose} className="mt-6 bg-alert px-6 py-2.5 rounded-xl font-semibold">Close</button>
          </div>
        )}
      </div>
    </div>
  )
}
