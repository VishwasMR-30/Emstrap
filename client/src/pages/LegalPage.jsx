import { useEffect } from 'react'
import { legal } from '../data/legal'

export default function LegalPage({ doc }) {
  const page = legal[doc]

  useEffect(() => {
    document.title = `${page.title} | EMSTRAP`
    return () => { document.title = 'EMSTRAP' }
  }, [page])

  return (
    <main className="pt-28 pb-24 px-6">
      <article className="max-w-3xl mx-auto">
        <p className="text-live text-xs tracking-[0.25em] mb-3">LEGAL</p>
        <h1 className="font-display text-3xl md:text-4xl font-bold">{page.title}</h1>
        <p className="text-slate-500 text-sm mt-2">Last updated: {page.updated}</p>
        <div className="mt-10 space-y-8">
          {page.sections.map(([heading, text]) => (
            <section key={heading}>
              <h2 className="font-display text-xl font-bold mb-2">{heading}</h2>
              <p className="text-slate-400">{text}</p>
            </section>
          ))}
        </div>
      </article>
    </main>
  )
}
