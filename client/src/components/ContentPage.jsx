import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { Panel, Cards, List, Steps, Problem, Checks, Chips, Compare, Plans, BriefingForm } from './PageBlocks'

const kinds = { cards: Cards, list: List, steps: Steps, problem: Problem, checks: Checks, chips: Chips, compare: Compare, plans: Plans }

// Renders any solution page or product page from its data.
export default function ContentPage({ page, slug, docSuffix }) {
  useEffect(() => {
    document.title = `${page.pageTitle} | ${docSuffix}`
    return () => { document.title = 'EMSTRAP' }
  }, [page, docSuffix])

  const forms = page.forms || [page.form]

  return (
    <main className="pt-16">
      <section className="px-6 py-20 bg-[radial-gradient(ellipse_at_top,#12203d,transparent_60%)]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-live text-xs tracking-[0.25em] mb-4">{page.tag}</p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="font-display text-3xl md:text-5xl font-bold leading-tight"
            >
              {page.pageTitle}
            </motion.h1>
            <p className="mt-5 text-slate-400">{page.subtitle}</p>
            <div className="mt-7 flex flex-wrap gap-4">
              <a href={page.primaryHref || '#details'} className="bg-alert px-6 py-3 rounded-xl font-semibold hover:opacity-90">{page.primary}</a>
              <a href={page.secondaryHref || '#briefing'} className="glass px-6 py-3 rounded-xl hover:bg-white/5">{page.secondary}</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {page.audience.map((a) => (
                <span key={a} className="text-xs border border-line rounded-full px-3 py-1 text-slate-300">{a}</span>
              ))}
            </div>
          </div>
          <Panel panel={page.panel} />
        </div>
      </section>

      {page.sections.map((s, i) => {
        const Block = kinds[s.kind]
        return (
          <section key={s.title} id={s.id || (i === 0 ? 'details' : undefined)} className="max-w-6xl mx-auto px-6 py-16 scroll-mt-16">
            <SectionTitle label={s.label} title={s.title} text={s.text} />
            <Block section={s} />
            {s.note && <p className="text-slate-400 mt-6">{s.note}</p>}
          </section>
        )
      })}

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="glass rounded-3xl p-10 md:p-14 text-center bg-[radial-gradient(ellipse_at_top,#1b2a4d,transparent_70%)]">
          {page.cta.label && <p className="text-live text-xs tracking-[0.25em] mb-3">{page.cta.label}</p>}
          <h2 className="font-display text-3xl font-bold">{page.cta.title}</h2>
          {page.cta.text && <p className="text-slate-400 mt-3 max-w-2xl mx-auto">{page.cta.text}</p>}
          <div className="mt-7 flex flex-wrap gap-4 justify-center">
            <a href={page.cta.href || '#briefing'} className="bg-alert px-6 py-3 rounded-xl font-semibold">{page.cta.button}</a>
            <Link to="/#contact" className="glass px-6 py-3 rounded-xl hover:bg-white/5">Contact Us</Link>
          </div>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-6 pb-24 space-y-8">
        {forms.map((f, i) => (
          <BriefingForm key={f.title} id={f.id || (i === 0 ? 'briefing' : undefined)} slug={slug} form={f} />
        ))}
      </section>
    </main>
  )
}
