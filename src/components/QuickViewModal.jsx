import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import './QuickViewModal.css'

const QuickViewModal = ({ product, onClose }) => {
  useEffect(() => {
    const state = { quickViewOpen: true }
    history.pushState(state, '', window.location.href)

    const handlePopState = (e) => {
      if (e.state?.quickViewOpen) {
        e.preventDefault()
        onClose()
      }
    }

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('popstate', handlePopState)
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('popstate', handlePopState)
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="qv-overlay"
          initial={{ opacity: 0, backdropFilter: 'blur(0px)', WebkitBackdropFilter: 'blur(0px)' }}
          animate={{ opacity: 1, backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
          exit={{ opacity: 0, backdropFilter: 'blur(0px)', WebkitBackdropFilter: 'blur(0px)' }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          onClick={onClose}
        >
          <motion.div
            className="qv-modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="qv-close" onClick={onClose}>&times;</button>

            <div className="qv-layout">
              <div className="qv-image-section">
                <div className="qv-image-wrap">
                  <TransformWrapper
                    initialScale={1}
                    minScale={1}
                    maxScale={4}
                    wheel={{ step: 0.3 }}
                    doubleClick={{ disabled: true }}
                    panning={{ disabled: false }}
                  >
                    <TransformComponent>
                      <img src={product.image} alt={product.title} className="qv-image" />
                    </TransformComponent>
                  </TransformWrapper>
                </div>
              </div>

              <div className="qv-info">
                <span className="qv-category">{product.category}</span>
                <h2 className="qv-title">{product.title}</h2>
                <p className="qv-desc">{product.description}</p>

                <div className="qv-actions">
                  <a
                    href={`https://wa.me/919351306520?text=Hi! I'm interested in: ${product.title} (${product.category})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="qv-whatsapp-btn"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.216.462-.216l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.087.276.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.828z"/>
                    </svg>
                    Inquiry on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default QuickViewModal
