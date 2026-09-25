import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import CountUp from '../components/CountUp'
import './Home.css'
import './Location.css'

const Home = () => {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  const features = [
    {
      icon: '🪵',
      title: 'Wooden God Idols',
      desc: 'Handcrafted wooden idols with divine detailing and traditional artistry.',
    },
    {
      icon: '🖼️',
      title: 'Premium Framing',
      desc: 'Custom frames for photos, religious art, glass frames, and decor.',
    },
    {
      icon: '📦',
      title: 'All India Delivery',
      desc: 'Safe packing and timely delivery across India. Order from anywhere!',
    },
    {
      icon: '⏳',
      title: '35+ Years Legacy',
      desc: 'Three decades of trust and craftsmanship serving Udaipur and beyond.',
    },
    {
      icon: '✨',
      title: 'Custom Orders',
      desc: 'Bespoke frames and idols made to your exact specifications.',
    },
    {
      icon: '💬',
      title: 'Easy Ordering',
      desc: 'Order via WhatsApp, phone, or visit our shop. We speak your language.',
    },
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-bg-pattern"></div>
        <div className="hero-content">
          <div className={`hero-text ${animate ? 'animate' : ''}`}>
            <p className="hero-greeting">Welcome to</p>
            <h1 className="hero-title">
              <span className="hero-title-line">Maa Barsavan</span>
              <span className="hero-title-line gold">Glass & Picture House</span>
            </h1>
            <p className="hero-tagline">"Made with devotion, packed with care."</p>
            <p className="hero-experience">35+ Years Experience | 26 Years of Trust</p>
            <div className="hero-buttons">
              <a href="https://wa.me/919351306520" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Chat
              </a>
              <Link to="/products" className="btn btn-outline">
                View Products
              </Link>
              <Link to="/gallery" className="btn btn-outline">
                Gallery
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-mouse">
            <div className="scroll-dot"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <Reveal as="h2" className="section-title">Why Choose <span className="gold-text">Maa Barsavan</span></Reveal>
          <Reveal as="p" className="section-subtitle">35+ years of devotion, craftsmanship, and trust — serving Udaipur with premium frames and handcrafted wooden idols.</Reveal>
          <div className="features-grid">
            {features.map((f, i) => (
              <Reveal key={i} className={`feature-card ${i % 2 === 0 ? 'fade-in-delay-1' : 'fade-in-delay-2'}`} delay={i * 0.08}>
                <div className="feature-icon">{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="home-story-section">
        <div className="home-story-header">
          <div className="container">
            <h2 className="home-story-title">Our Story</h2>
            <p className="home-story-subtitle">Made with devotion, packed with care.</p>
          </div>
        </div>
        <div className="home-story-body">
          <div className="container">
            <Reveal className="home-story-grid">
              <div className="home-story-content">
                <h3 className="home-story-heading">35+ Years of <span className="gold-text">Craftsmanship</span></h3>
                <p>
                  Maa Barsavan Glass And Picture House — Udaipur ka ek bharosa, 35+ saalon se. Yeh safar shuru hua tha chhoti si shop se, 
                  aur aaj hum Udaipur ke ek trusted name hain jab baat aati hai framing aur handcrafted wooden idols ki.
                </p>
                <p>
                  <strong>Ramesh Gorana</strong> — who started this business with a vision to provide premium quality frames and 
                  devotional artwork. With 26 years of registered trust, we have served ten thousands of happy customers across India.
                </p>
                <p>
                  Har frame jo hum banate hain, usmein lagta hai devotion aur craftsmanship ka pura dhyaan. Chahe wo ek simple photo 
                  frame ho ya ek intricate wooden god idol — quality par koi compromise nahi. Humare kaam mein dikhta hai pyaar, 
                  patience aur precision.
                </p>
                <p>
                  Made with devotion, packed with care — yeh sirf ek tagline nahi hai, yeh humara promise hai aapke liye.
                </p>
              </div>
              <div className="home-story-cards">
                <Reveal className="home-story-card dark-card" y={30} delay={0.1}>
                  <span className="home-story-number"><CountUp to={35} suffix="+" duration={2} /></span>
                  <span className="home-story-label">Years of Experience</span>
                </Reveal>
                <Reveal className="home-story-card gold-card" y={30} delay={0.2}>
                  <span className="home-story-number"><CountUp to={26} duration={2} /></span>
                  <span className="home-story-label">Years of Trust</span>
                </Reveal>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <Reveal className="cta-content">
            <h2 className="cta-title">Ready to Frame Your Memories?</h2>
            <p className="cta-desc">Whether you need a custom frame, a handcrafted wooden idol, or bulk order — hum yahan hain aapki madad ke liye!</p>
            <div className="cta-buttons">
              <a href="https://wa.me/919351306520" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Order on WhatsApp
              </a>
              <Link to="/contact" className="btn btn-outline">
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Instagram Embed */}
      <section className="section instagram-embed-section">
        <div className="container">
          <Reveal as="h2" className="section-title">Follow Us on <span className="gold-text">Instagram</span></Reveal>
          <Reveal as="p" className="section-subtitle">@maa.barsavan_udaipur</Reveal>
          <Reveal className="instagram-embed">
            <div className="insta-placeholder">
              <div className="insta-header">
                <div className="insta-avatar">MB</div>
                <div>
                  <p className="insta-handle">maa.barsavan_udaipur</p>
                  <p className="insta-name">Maa Barsavan Glass & Picture House</p>
                </div>
              </div>
              <div className="insta-grid">
                <div className="insta-grid-item">
                  <div className="insta-img-placeholder"><img src="/images/image1.jpg" alt="Post 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                </div>
                <div className="insta-grid-item">
                  <div className="insta-img-placeholder"><img src="/images/image2.jpg" alt="Post 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                </div>
                <div className="insta-grid-item">
                  <div className="insta-img-placeholder"><img src="/images/image3.jpg" alt="Post 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                </div>
                <div className="insta-grid-item">
                  <div className="insta-img-placeholder"><img src="/images/image4.jpg" alt="Post 4" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                </div>
                <div className="insta-grid-item">
                  <div className="insta-img-placeholder"><img src="/images/image5.jpg" alt="Post 5" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                </div>
                <div className="insta-grid-item">
                  <div className="insta-img-placeholder"><img src="/images/image6.png" alt="Post 6" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                </div>
              </div>
              <a
                href="https://www.instagram.com/maa.barsavan_udaipur/"
                target="_blank"
                rel="noopener noreferrer"
                className="insta-btn-link"
              >
                Open Instagram Profile
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="container">
        <hr className="section-divider" />
      </div>

      {/* Location Section */}
      <section className="section home-location-section">
        <div className="container">
          <Reveal as="h2" className="section-title">Visit Our <span className="gold-text">Shop</span></Reveal>
          <Reveal as="p" className="section-subtitle">Come meet us at Udaipur's trusted framing & idol shop.</Reveal>
          <div className="location-grid">
            <Reveal className="location-info">
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
            </Reveal>

            <Reveal className="location-map">
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
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <Reveal className="stat-item" delay={0}>
              <span className="stat-number"><CountUp to={35} suffix="+" duration={2} /></span>
              <span className="stat-label">Years Experience</span>
            </Reveal>
            <Reveal className="stat-item" delay={0.1}>
              <span className="stat-number"><CountUp to={26} duration={2} /></span>
              <span className="stat-label">Years of Trust</span>
            </Reveal>
            <Reveal className="stat-item" delay={0.2}>
              <span className="stat-number"><CountUp to={10000} suffix="+" duration={2} /></span>
              <span className="stat-label">Happy Customers</span>
            </Reveal>
            <Reveal className="stat-item" delay={0.3}>
              <span className="stat-number">All India</span>
              <span className="stat-label">Delivery</span>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
