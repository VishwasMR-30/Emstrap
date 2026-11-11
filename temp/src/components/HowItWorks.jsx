import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { steps } from '../data/steps'

export default function HowItWorks() {
  return (
    <section id="how" className="max-w-4xl mx-auto px-6 py-24 scroll-mt-16">
      <SectionTitle
        label="HOW IT WORKS"
        title="From crisis to care."
        text="A connected emergency response flow designed to move information quickly from the moment an emergency occurs to the moment care begins."
      />

      <div className="relative border-l border-line ml-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="relative pl-10 pb-12 last:pb-0"
          >
            <span className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-bg border-2 border-alert flex items-center justify-center text-[10px] font-bold text-alert">
              {s.n}
            </span>
            <p className="text-xs text-live tracking-widest">STEP {s.n}</p>
            <h3 className="font-display text-xl font-bold mt-1">{s.title}</h3>
            <p className="text-slate-400 mt-1">{s.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
