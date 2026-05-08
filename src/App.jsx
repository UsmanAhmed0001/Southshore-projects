import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Gallery from './pages/Gallery.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import EqualOpportunity from './pages/EqualOpportunity.jsx'
import ModernSlavery from './pages/ModernSlavery.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/equal-opportunity-policy" element={<EqualOpportunity />} />
          <Route path="/modern-slavery-statement" element={<ModernSlavery />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </>
  )
}
