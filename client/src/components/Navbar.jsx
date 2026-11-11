import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Siren, ChevronDown, Menu, X } from 'lucide-react'
import { solutions } from '../data/solutions'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [mobile, setMobile] = useState(false)

  return (
    <nav className="glass fixed top-0 inset-x-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold">
          <Siren className="text-alert" /> EMSTRAP
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link to="/about" className="hover:text-live">About</Link>
          <Link to="/#services" className="hover:text-live">Services</Link>

          <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <button className="flex items-center gap-1 hover:text-live">
              Solutions <ChevronDown size={14} />
            </button>
            {open && (
              <div className="absolute top-full left-0 pt-2 w-64">
                <div className="glass rounded-xl p-2">
                  {solutions.map((s) => (
                    <Link key={s.name} to={`/solutions/${s.slug}`} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-white/5">
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/#how" className="hover:text-live">How it works</Link>
          <Link to="/demo" className="hover:text-live">Platform Demo</Link>
          <Link to="/careers" className="hover:text-live">Careers</Link>
          <Link to="/#contact" className="hover:text-live">Contact</Link>
        </div>

        <button className="md:hidden" onClick={() => setMobile(!mobile)} aria-label="Menu">
          {mobile ? <X /> : <Menu />}
        </button>
      </div>

      {mobile && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-sm" onClick={() => setMobile(false)}>
          <Link to="/about">About</Link>
          <Link to="/#services">Services</Link>
          <Link to="/#solutions">Solutions</Link>
          <Link to="/#how">How it works</Link>
          <Link to="/demo">Platform Demo</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/#contact">Contact</Link>
        </div>
      )}
    </nav>
  )
}
