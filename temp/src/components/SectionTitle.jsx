import { motion } from 'framer-motion'

export default function SectionTitle({ label, title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mb-12"
    >
      <p className="text-live text-xs tracking-[0.25em] mb-3">{label}</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold">{title}</h2>
      {text && <p className="text-slate-400 mt-4">{text}</p>}
    </motion.div>
  )
}
