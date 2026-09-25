import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Location.css'

const Location = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="location-page">
      <section className="page-hero location-hero">
        <div className="page-hero-overlay"></div>
        <div className="container">
          <div className="page-hero-content">
            <h1 className="page-hero-title">Our Location</h1>
            <p className="page-hero-subtitle">Visit us at Udaipur's trusted framing shop</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="location-grid">
            <div className="location-info reveal">
              <h2>Maa Barsavan <span className="gold-text">Glass & Picture House</span></h2>
              <div className="location-detail">
                <div className="location-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <p className="location-label">Address</p>
                  <p className="location-value">5 Mahavir Market, Ayad Road, Near Jain Mandir, Udaipur, Rajasthan 313001</p>
                </div>
              </div>
              <div className="location-detail">
                <div className="location-icon clock">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </div>
                <div>
                  <p className="location-label">Shop Timing</p>
                  <p className="location-value">10:00 AM – 8:00 PM (Open Mon-Sat)</p>
                </div>
              </div>
              <div className="location-detail">
                <div className="location-icon phone">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.692 15.503c-1.087-.536-2.663-.534-3.77.098-.473.272-.735.666-1.072 1.188-.22.342-.503.782-.965.676-.461-.106-1.239-.661-2.149-1.571-.91-.91-1.465-1.688-1.571-2.149-.106-.462.334-.745.676-.965.522-.337.916-.599 1.188-1.072.632-1.107.634-2.683.098-3.77-.652-1.323-2.088-1.981-3.64-1.251-.773.364-.991.854-1.095 1.366-.104.513-.152 1.671.716 3.18.868 1.509 2.087 2.787 3.018 3.605 1.288 1.131 2.246 1.603 2.999 1.851 1.052.347 1.755.252 2.344-.147.337-.228.567-.538.737-.864.348-.671.178-1.717-.909-2.253z"/>
                  </svg>
                </div>
                <div>
                  <p className="location-label">Phone</p>
                  <p className="location-value">93513-06520</p>
                </div>
              </div>

              <div className="location-actions">
                <a
                  href="https://maps.app.goo.gl/Egh7FR3BTF3JVwqb6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  Open in Google Maps
                </a>
                <Link to="/faq" className="btn btn-dark">
                  FAQ
                </Link>
              </div>
            </div>

            <div className="location-map reveal">
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.050936866842!2d73.71352787392439!3d24.587438256130852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e591b797b6bf%3A0x413fd905ff9bf515!2sMaa%20Barsawan%20Glass%20And%20Picture%20House!5e0!3m2!1sen!2sin!4v1783264868020!5m2!1sen!2sin" 
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: 'var(--radius)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Maa Barsavan Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Location
