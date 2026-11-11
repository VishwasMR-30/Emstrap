import { Siren } from 'lucide-react'
import { solutions } from '../data/solutions'

export default function Footer() {
  return (
    <footer className="border-t border-line mt-12">
      <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4 text-sm">
        <div>
          <p className="flex items-center gap-2 font-display text-lg font-bold mb-3">
            <Siren className="text-alert" /> EMSTRAP Pvt Ltd
          </p>
          <p className="text-slate-400">
            Transforming emergency response through smart technology and real-time coordination.
            Saving lives, one second at a time.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-slate-400">
            <li><a href="/#about" className="hover:text-live">About</a></li>
            <li><a href="/#services" className="hover:text-live">Services</a></li>
            <li><a href="#" className="hover:text-live">Careers</a></li>
            <li><a href="/#contact" className="hover:text-live">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Solutions</h4>
          <ul className="space-y-2 text-slate-400">
            {solutions.slice(0, 8).map((s) => (
              <li key={s.name}><a href="/#solutions" className="hover:text-live">{s.name}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact Details</h4>
          <ul className="space-y-2 text-slate-400">
            <li>contact@emstrap.com</li>
            <li>+91 9880882476</li>
          </ul>
          <h4 className="font-semibold mt-6 mb-3">Legal</h4>
          <ul className="space-y-2 text-slate-400">
            <li><a href="#" className="hover:text-live">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-live">Terms &amp; Conditions</a></li>
          </ul>
        </div>
      </div>
      <p className="text-center text-xs text-slate-500 pb-8">© 2026 EMSTRAP Pvt Ltd. All rights reserved.</p>
    </footer>
  )
}
