import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Seo from './Seo.jsx'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Seo />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}