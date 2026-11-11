import { useState } from 'react'
import { Mail, Phone, CheckCircle2 } from 'lucide-react'
import SectionTitle from './SectionTitle'

export default function Contact() {
  const [form, setForm] = useState({ name: '', org: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      // Backend will be connected on Monday: POST /api/contact
      await new Promise((r) => setTimeout(r, 800))
      setSent(true)
      setForm({ name: '', org: '', email: '', phone: '', message: '' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-16">
      <SectionTitle
        label="GET IN TOUCH"
        title="Contact Us"
        text="Connect with our corporate team for partnerships, enterprise solutions, and investment inquiries."
      />

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h3 className="font-display text-xl font-bold">Contact Details</h3>
          <a href="mailto:contact@emstrap.com" className="flex items-center gap-3 text-slate-300 hover:text-live">
            <Mail className="text-alert" /> contact@emstrap.com
          </a>
          <a href="tel:9880882476" className="flex items-center gap-3 text-slate-300 hover:text-live">
            <Phone className="text-alert" /> 9880882476
          </a>
          <h3 className="font-display text-xl font-bold pt-4">Professional Networks</h3>
          <p className="text-slate-400 text-sm">Follow us on LinkedIn to track partnership events and career updates.</p>
        </div>

        <form onSubmit={submit} className="glass rounded-2xl p-8 space-y-4">
          <h3 className="font-display text-xl font-bold">Send a Corporate Message</h3>
          <input className="input" name="name" placeholder="Full Name" value={form.name} onChange={change} required />
          <input className="input" name="org" placeholder="Organization" value={form.org} onChange={change} />
          <input className="input" type="email" name="email" placeholder="Email Address" value={form.email} onChange={change} required />
          <input className="input" name="phone" placeholder="Phone Number" value={form.phone} onChange={change} />
          <textarea className="input h-32" name="message" placeholder="Your Message" value={form.message} onChange={change} required />
          <button disabled={loading} className="w-full bg-alert py-3 rounded-xl font-semibold hover:opacity-90 disabled:opacity-60">
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      {sent && (
        <div className="fixed inset-0 z-[60] bg-black/70 flex items-center justify-center px-6" onClick={() => setSent(false)}>
          <div className="glass rounded-2xl p-8 max-w-sm text-center" onClick={(e) => e.stopPropagation()}>
            <CheckCircle2 className="mx-auto text-live mb-3" size={40} />
            <h3 className="font-display text-xl font-bold">Email Sent!</h3>
            <p className="text-slate-400 text-sm mt-2">
              Your message has been sent. Our team will review your enquiry and get back to you shortly.
            </p>
            <button onClick={() => setSent(false)} className="mt-5 bg-alert px-6 py-2 rounded-xl font-semibold">Close</button>
          </div>
        </div>
      )}
    </section>
  )
}
