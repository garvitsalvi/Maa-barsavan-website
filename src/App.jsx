import { useEffect, useState } from 'react'
import { Routes, Route, useLocation, Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Location from './pages/Location'
import FAQ from './pages/FAQ'
import './App.css'
import ReactGA from 'react-ga4'

const TRACKING_ID = "G-0EW18DXQFE"; // Apni asli ID yahan daalna
ReactGA.initialize('G-0EW18DXQFE'); // Apni asli ID yahan daalna

function AnalyticsTracker() {
  const location = useLocation();
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);
  return null;
}

function trackWhatsApp() {
  ReactGA.event({
    category: "Contact",
    action: "Click",
    label: "WhatsApp - Footer"
  });
}

function trackMaps() {
  ReactGA.event({
    category: "Contact",
    action: "Click",
    label: "Google Maps - Footer"
  });
}

function App() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className={`loading-screen ${loading ? '' : 'hidden'}`}>
        <div className="loading-text">Maa Barsavan</div>
        <div className="loading-bar">
          <div className="loading-bar-fill"></div>
        </div>
        <div className="loading-year">Est. 2000s · Udaipur</div>
      </div>
       
        <AnalyticsTracker /> {/* Ye line yahan add karni hai */}
       
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/location" element={<Location />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>
      <Footer trackWhatsApp={trackWhatsApp} trackMaps={trackMaps} />
       
      <FloatingWhatsApp />
    </>
  )
}

export default App
