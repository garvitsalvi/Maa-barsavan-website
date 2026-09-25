import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import CountUp from '../components/CountUp'
import './About.css'

const About = () => {

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="page-hero about-hero">
        <div className="page-hero-overlay"></div>
        <div className="container">
          <div className="page-hero-content">
            <h1 className="page-hero-title">Our Story</h1>
            <p className="page-hero-subtitle">Made with devotion, packed with care.</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container">
          <Reveal className="about-story">
            <div className="about-story-content">
              <h2 className="about-story-heading">35+ Years of <span className="gold-text">Craftsmanship</span></h2>
              <p>
                Maa Barsavan Glass And Picture House — Udaipur ka ek bharosa, 35+ saalon se. Yeh safar shuru hua tha chhoti si shop se, 
                aur aaj hum Udaipur ke ek trusted name hain jab baat aati hai framing aur handcrafted wooden idols ki.
              </p>
              <p>
                <strong>Ramesh Gorana</strong> — who started this business with a vision to provide premium quality frames and 
                devotional artwork. With 26 years of registered trust, we have served thousands of happy customers across India.
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
            <div className="about-story-visual">
              <Reveal className="about-experience-badge" y={30} delay={0.1}>
                <span className="exp-number"><CountUp to={35} suffix="+" duration={2} /></span>
                <span className="exp-text">Years of Experience</span>
              </Reveal>
              <Reveal className="about-trust-badge" y={30} delay={0.2}>
                <span className="exp-number"><CountUp to={26} duration={2} /></span>
                <span className="exp-text">Years of Trust</span>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <Reveal as="h2" className="section-title">Our <span className="gold-text">Values</span></Reveal>
          <div className="values-grid">
            <Reveal className="value-card">
              <div className="value-icon">🙏</div>
              <h3>Devotion</h3>
              <p>Har piece mein devotion aur bhakti ka bhaav. We create with spiritual dedication.</p>
            </Reveal>
            <Reveal className="value-card">
              <div className="value-icon">🎨</div>
              <h3>Craftsmanship</h3>
              <p>35+ saalon ki expert craftsmanship. Har frame perfect finishing ke saath.</p>
            </Reveal>
            <Reveal className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Trust</h3>
              <p>26 years of registered trust. Humare customers humein pehchante hain.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <Reveal className="about-cta">
            <h2>Let's Create Something Beautiful Together</h2>
            <p>Apna frame ya idol discuss karein — hum aapki madad karke khushi mehsoos karte hain!</p>
            <div className="about-cta-buttons">
              <a href="https://wa.me/919351306520" target="_blank" rel="noopener noreferrer" className="btn btn-gold">Chat on WhatsApp</a>
              <Link to="/products" className="btn btn-dark">View Our Products</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

export default About
