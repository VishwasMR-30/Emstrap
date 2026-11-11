import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { solutions } from '../data/solutions'

export default function Solutions() {
  return (
    <section id="solutions" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-16">
      <SectionTitle
        label="WHO WE SERVE"
        title="Solutions That Save Lives"
        text="From data to decision, we engineer outcomes that accelerate emergency performance across public safety, healthcare, and enterprise sectors."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 3) * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass rounded-2xl p-6 flex flex-col hover:border-alert/50 transition-colors"
          >
            <span className="self-start text-[10px] tracking-widest text-live border border-line rounded-full px-3 py-1 mb-4">
              {s.tag}
            </span>
            <h3 className="font-display text-lg font-bold">{s.name}</h3>
            <p className="text-alert text-sm mt-1">{s.sub}</p>
            <p className="text-slate-400 text-sm mt-3 flex-1">{s.text}</p>
            <a href="#" className="mt-5 text-sm font-semibold hover:text-live">Explore Solutions →</a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
