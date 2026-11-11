import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import About from '../components/About'
import HowItWorks from '../components/HowItWorks'
import Services from '../components/Services'

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About | EMSTRAP'
    return () => { document.title = 'EMSTRAP' }
  }, [])

  return (
    <main className="pt-16">
      <section className="px-6 py-24 bg-[radial-gradient(ellipse_at_top,#12203d,transparent_60%)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-live text-xs tracking-[0.25em] mb-4">ABOUT EMSTRAP</p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="font-display text-4xl md:text-6xl font-bold leading-tight"
          >
            Saving lives, <span className="text-alert">one second at a time.</span>
          </motion.h1>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Transforming emergency response through smart technology and real-time coordination.
          </p>
        </div>
      </section>

      <About showLink={false} />
      <HowItWorks />
      <Services />

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="glass rounded-3xl p-10 md:p-14 text-center bg-[radial-gradient(ellipse_at_top,#1b2a4d,transparent_70%)]">
          <h2 className="font-display text-3xl font-bold">Work with EMSTRAP</h2>
          <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
            Connect with our corporate team for partnerships, enterprise solutions, and investment inquiries.
          </p>
          <div className="mt-7 flex flex-wrap gap-4 justify-center">
            <Link to="/#contact" className="bg-alert px-6 py-3 rounded-xl font-semibold">Contact Us</Link>
            <Link to="/careers" className="glass px-6 py-3 rounded-xl hover:bg-white/5">View Careers</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
