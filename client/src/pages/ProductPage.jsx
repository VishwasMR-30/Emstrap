import { Link, useParams } from 'react-router-dom'
import ContentPage from '../components/ContentPage'
import { products } from '../data/products'

export default function ProductPage() {
  const { slug } = useParams()
  const page = products[slug]
  if (!page) {
    return (
      <main className="pt-32 pb-24 text-center px-6">
        <h1 className="font-display text-3xl font-bold">Page not found</h1>
        <p className="text-slate-400 mt-3">We could not find that product page.</p>
        <Link to="/#services" className="inline-block mt-6 bg-alert px-6 py-3 rounded-xl font-semibold">Back to Services</Link>
      </main>
    )
  }
  return <ContentPage page={page} slug={slug} docSuffix="EMSTRAP" />
}
