import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = ({ trackWhatsApp, trackMaps }) => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3 className="footer-brand">Maa Barsavan</h3>
            <p className="footer-desc">
              Made with devotion, packed with care. Serving Udaipur with premium framing and handcrafted wooden idols since 2000s.
            </p>
            <div className="footer-social">
              <a href="https://www.instagram.com/maa.barsavan_udaipur/" target="_blank" rel="noopener noreferrer" className="social-link">
                Instagram
              </a>
              <a href="https://wa.me/919351306520" target="_blank" rel="noopener noreferrer" className="social-link" onClick={trackWhatsApp}>
                WhatsApp
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/products">Products</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/faq">FAQ</Link>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Products</h4>
            <div className="footer-links">
              <Link to="/products">Wooden God Idols</Link>
              <Link to="/products">Religious Frames</Link>
              <Link to="/products">Glass Frames</Link>
              <Link to="/products">Photo Frames</Link>
              <Link to="/products">Custom Frames</Link>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-contact">
              <p><a href="https://maps.google.com/?q=5+Mahavir+Market+Ayad+Road+Udaipur" target="_blank" rel="noopener noreferrer" onClick={trackMaps}>5 Mahavir Market, Ayad Road, Near Jain Mandir, Udaipur, Rajasthan</a></p>
              <p><a href="tel:9351306520">93513-06520</a></p>
              <p><a href="mailto:r.barsavan@gmail.com">r.barsavan@gmail.com</a></p>
              <p className="footer-timing">Open: 10:00 AM – 8:00 PM</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} Maa Barsavan Glass And Picture House. All rights reserved.</p>
          <p className="footer-credit">Crafted with devotion in Udaipur</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
