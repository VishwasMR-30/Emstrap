import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SOSButton from './components/SOSButton'
import Home from './pages/Home'
import Demo from './pages/Demo'
import Careers from './pages/Careers'
import SolutionPage from './pages/SolutionPage'
import ProductPage from './pages/ProductPage'
import AboutPage from './pages/AboutPage'
import LegalPage from './pages/LegalPage'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      setTimeout(() => document.querySelector(hash)?.scrollIntoView(), 60)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/solutions/:slug" element={<SolutionPage />} />
        <Route path="/products/:slug" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy" element={<LegalPage doc="privacy" />} />
        <Route path="/terms" element={<LegalPage doc="terms" />} />
      </Routes>
      <Footer />
      <SOSButton />
    </>
  )
}
