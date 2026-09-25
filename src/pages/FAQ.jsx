import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import faqs from '../data/faq'
import './FAQ.css'

const FaqItem = ({ faq, isOpen, onToggle }) => {
  const contentRef = useRef(null)

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <div className="faq-question" onClick={onToggle}>
        <span>{faq.question}</span>
        <motion.span
          className="faq-icon"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
        >
          +
        </motion.span>
      </div>
      <motion.div
        className="faq-answer"
        initial={false}
        animate={{
          height: isOpen ? contentRef.current?.scrollHeight ?? 0 : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div ref={contentRef} className="faq-answer-inner">
          <p>{faq.answer}</p>
        </div>
      </motion.div>
    </div>
  )
}

const FAQ = () => {
  const [openId, setOpenId] = useState(null)

  const toggleFAQ = (id) => {
    setOpenId(prev => prev === id ? null : id)
  }

  return (
    <div className="faq-page">
      <section className="page-hero faq-hero">
        <div className="page-hero-overlay"></div>
        <div className="container">
          <div className="page-hero-content">
            <h1 className="page-hero-title">Frequently Asked Questions</h1>
            <p className="page-hero-subtitle">Quick answers to your common questions</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="faq-list">
            {faqs.map(faq => (
              <FaqItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => toggleFAQ(faq.id)}
              />
            ))}
          </div>

          <div className="faq-cta">
            <h3>Still have questions?</h3>
            <p>Hum yahan hain aapki madad ke liye! Koi bhi sawaal ho to poochhiye.</p>
            <a href="https://wa.me/919351306520" target="_blank" rel="noopener noreferrer" className="btn btn-gold">
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ
