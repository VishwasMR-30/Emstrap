import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionTitle from './SectionTitle'
import { Target, Eye } from 'lucide-react'

export default function About({ showLink = true }) {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-16">
      <SectionTitle label="ABOUT" title="Modernising emergency response through technology." />

      <div className="grid md:grid-cols-2 gap-10 text-slate-400">
        <p>
          Emergency situations demand speed, coordination, and accurate decision-making. EMSTRAP is
          building a unified emergency response ecosystem designed to connect citizens, responders,
          hospitals, and authorities through intelligent technology.
        </p>
        <p>
          By integrating Artificial Intelligence, real-time communication, GPS tracking, and
          multi-agency coordination into a single platform, EMSTRAP enables seamless collaboration
          between public-safety authorities, healthcare networks, ambulance operators, and enterprises.
        </p>
      </div>

      {showLink && (
        <Link to="/about" className="inline-block mt-8 bg-alert px-6 py-3 rounded-xl font-semibold hover:opacity-90">
          Learn More About EMSTRAP
        </Link>
      )}

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {[
          { icon: Target, t: 'Our Mission', d: 'To build an intelligent emergency response ecosystem that enables faster medical assistance, improves communication between emergency services, and ensures timely care through innovative technology.' },
          { icon: Eye, t: 'Our Vision', d: "To become India's leading AI-powered emergency response platform, empowering healthcare providers, emergency responders, government agencies, and enterprises with intelligent solutions that make communities safer and emergency care more accessible." },
        ].map(({ icon: Icon, t, d }) => (
          <motion.div key={t} whileHover={{ y: -6 }} className="glass rounded-2xl p-8">
            <Icon className="text-alert mb-4" />
            <h3 className="font-display text-xl font-bold mb-2">{t}</h3>
            <p className="text-slate-400 text-sm">{d}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
