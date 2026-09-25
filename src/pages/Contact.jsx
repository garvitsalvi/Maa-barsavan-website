import { useState, useEffect } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

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

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, phone, message } = formData
    const text = `Hello! I'm ${name}. Phone: ${phone}. Message: ${message}`
    window.open(`https://wa.me/919351306520?text=${encodeURIComponent(text)}`, '_blank')
    setSubmitted(true)
    setFormData({ name: '', phone: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="contact-page">
      <section className="page-hero contact-hero">
        <div className="page-hero-overlay"></div>
        <div className="container">
          <div className="page-hero-content">
            <h1 className="page-hero-title">Contact Us</h1>
            <p className="page-hero-subtitle">Hum yahan hain aapki madad ke liye</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info reveal">
              <h2 className="contact-info-title">Get in Touch</h2>

              <a href="tel:9351306520" className="contact-card">
                <div className="contact-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.692 15.503c-1.087-.536-2.663-.534-3.77.098-.473.272-.735.666-1.072 1.188-.22.342-.503.782-.965.676-.461-.106-1.239-.661-2.149-1.571-.91-.91-1.465-1.688-1.571-2.149-.106-.462.334-.745.676-.965.522-.337.916-.599 1.188-1.072.632-1.107.634-2.683.098-3.77-.652-1.323-2.088-1.981-3.64-1.251-.773.364-.991.854-1.095 1.366-.104.513-.152 1.671.716 3.18.868 1.509 2.087 2.787 3.018 3.605 1.288 1.131 2.246 1.603 2.999 1.851 1.052.347 1.755.252 2.344-.147.337-.228.567-.538.737-.864.348-.671.178-1.717-.909-2.253z"/>
                  </svg>
                </div>
                <div>
                  <h3>Call Us</h3>
                  <p>93513-06520</p>
                </div>
              </a>

              <a href="https://wa.me/919351306520" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-card-icon whatsapp">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.216.462-.216l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.087.276.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.828z"/>
                  </svg>
                </div>
                <div>
                  <h3>WhatsApp</h3>
                  <p>Chat with us instantly</p>
                </div>
              </a>

              <a href="mailto:r.barsavan@gmail.com" className="contact-card">
                <div className="contact-card-icon email">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <h3>Email</h3>
                  <p>r.barsavan@gmail.com</p>
                </div>
              </a>

              <div className="contact-address">
                <h3>Visit Our Shop</h3>
                <p>5 Mahavir Market, Ayad Road, Near Jain Mandir, Udaipur, Rajasthan</p>
                <p className="contact-timing">Open: 10:00 AM – 8:00 PM</p>
                <a
                  href="https://maps.app.goo.gl/Egh7FR3BTF3JVwqb6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrap reveal">
              <h2 className="contact-form-title">Send us a Message</h2>
              <p className="contact-form-sub">Hum jald se jald aapka message reply karenge</p>

              {submitted && (
                <div className="form-success">
                  Thanks! We'll get back to you shortly on WhatsApp.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder="Tell us what you need..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-gold form-submit">
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
