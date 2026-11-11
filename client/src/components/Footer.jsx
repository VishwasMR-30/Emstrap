import { Link } from 'react-router-dom'
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
            <li><Link to="/about" className="hover:text-live">About</Link></li>
            <li><a href="/#services" className="hover:text-live">Services</a></li>
            <li><Link to="/careers" className="hover:text-live">Careers</Link></li>
            <li><a href="/#contact" className="hover:text-live">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Solutions</h4>
          <ul className="space-y-2 text-slate-400">
            {solutions.map((s) => (
              <li key={s.name}><Link to={`/solutions/${s.slug}`} className="hover:text-live">{s.name}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact Details</h4>
          <ul className="space-y-2 text-slate-400">
            <li>contact@emstrap.com</li>
            <li>+91 9880882476</li>
            <li><a href="https://www.linkedin.com/company/emstrap/" target="_blank" rel="noreferrer" className="hover:text-live">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/emstrap_official" target="_blank" rel="noreferrer" className="hover:text-live">Instagram</a></li>
          </ul>
          <h4 className="font-semibold mt-6 mb-3">Legal</h4>
          <ul className="space-y-2 text-slate-400">
            <li><Link to="/privacy" className="hover:text-live">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-live">Terms &amp; Conditions</Link></li>
          </ul>
        </div>
      </div>
      <p className="text-center text-xs text-slate-500 pb-8">© 2026 EMSTRAP Pvt Ltd. All rights reserved.</p>
    </footer>
  )
}
