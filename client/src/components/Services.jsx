import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Radio, Ambulance, ShieldCheck, Activity } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { services } from '../data/services'

const icons = { radio: Radio, ambulance: Ambulance, shield: ShieldCheck, activity: Activity }

export default function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-16">
      <SectionTitle
        label="OUR SERVICES"
        title="Platforms That Save Lives"
        text="From data to decision, we engineer outcomes that accelerate emergency performance across public safety, healthcare, and enterprise sectors."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s, i) => {
          const Icon = icons[s.icon]
          return (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-8 hover:border-live/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-alert/10 flex items-center justify-center mb-5">
                <Icon className="text-alert" />
              </div>
              <h3 className="font-display text-xl font-bold">{s.name}</h3>
              <p className="text-slate-400 text-sm mt-2">{s.text}</p>

              <div className="grid grid-cols-2 gap-4 mt-6">
                {s.stats.map(([big, small]) => (
                  <div key={small}>
                    <p className="font-display text-2xl text-live font-bold">{big}</p>
                    <p className="text-xs text-slate-500">{small}</p>
                  </div>
                ))}
              </div>

              <Link to={`/products/${s.slug}`} className="inline-block mt-6 text-sm font-semibold text-alert hover:underline">
                KNOW MORE →
              </Link>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
