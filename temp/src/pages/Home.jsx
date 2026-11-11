import { motion } from 'framer-motion'
import About from '../components/About'
import HowItWorks from '../components/HowItWorks'
import Services from '../components/Services'
import Solutions from '../components/Solutions'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main>
      <section className="min-h-screen flex items-center justify-center px-6 pt-16 bg-[radial-gradient(ellipse_at_top,#12203d,transparent_60%)]">
        <div className="max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-xs text-live border border-line rounded-full px-3 py-1 mb-6">
            <span className="w-2 h-2 rounded-full bg-live animate-pulse" /> LIVE COORDINATION GRID
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl md:text-6xl font-bold leading-tight"
          >
            When Every Second Matters, <span className="text-alert">Every Response Counts.</span>
          </motion.h1>

          <p className="mt-6 text-slate-400">
            EMSTRAP is an AI-powered emergency response ecosystem synchronizing police command
            centers, hospital networks, ambulance fleets, and enterprise facilities under a
            unified, real-time coordination grid engineered for zero latency.
          </p>

          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <button className="bg-alert px-6 py-3 rounded-xl font-semibold hover:opacity-90">
              Explore Platform Demo
            </button>
            <a href="#services" className="glass px-6 py-3 rounded-xl hover:bg-white/5">
              Explore Services
            </a>
          </div>
        </div>
      </section>

      <About />
      <HowItWorks />
      <Services />
      <Solutions />
      <Contact />
    </main>
  )
}
