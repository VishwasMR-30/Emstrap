import { Link, useParams } from 'react-router-dom'
import ContentPage from '../components/ContentPage'
import { solutionPages } from '../data/solutionPages'

export default function SolutionPage() {
  const { slug } = useParams()
  const page = solutionPages[slug]
  if (!page) {
    return (
      <main className="pt-32 pb-24 text-center px-6">
        <h1 className="font-display text-3xl font-bold">Page not found</h1>
        <p className="text-slate-400 mt-3">We could not find that solution page.</p>
        <Link to="/#solutions" className="inline-block mt-6 bg-alert px-6 py-3 rounded-xl font-semibold">Back to Solutions</Link>
      </main>
    )
  }
  return <ContentPage page={page} slug={slug} docSuffix="EMSTRAP Solutions" />
}
