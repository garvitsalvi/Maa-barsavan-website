import { useParams, Link } from 'react-router-dom'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import products from '../data/products'
import './ProductDetail.css'

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))

  if (!product) {
    return (
      <div className="product-detail-page">
        <div className="container">
          <div className="product-not-found">
            <h2>Product not found</h2>
            <Link to="/products" className="back-link">← Back to Products</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="product-detail-page">
      <section className="page-hero detail-hero">
        <div className="page-hero-overlay"></div>
        <div className="container">
          <div className="page-hero-content">
            <h1 className="page-hero-title">{product.title}</h1>
            <p className="page-hero-subtitle">{product.category}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Link to="/products" className="back-link">← Back to Products</Link>

          <div className="product-detail-layout">
            <div className="product-detail-image-section">
              <div className="product-detail-image-wrap">
                <span className="zoom-indicator">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                  Zoom
                </span>
                <TransformWrapper
                  initialScale={1}
                  minScale={1}
                  maxScale={4}
                  wheel={{ step: 0.3 }}
                  doubleClick={{ disabled: true }}
                  panning={{ disabled: false }}
                >
                  {({ zoomIn, zoomOut, resetTransform }) => (
                    <>
                      <div className="zoom-toolbar">
                        <button className="zoom-btn" onClick={zoomIn} title="Zoom In">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        </button>
                        <button className="zoom-btn" onClick={zoomOut} title="Zoom Out">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        </button>
                        <button className="zoom-btn zoom-reset" onClick={resetTransform} title="Reset Zoom">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <path d="M1 4v6h6" /><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                          </svg>
                        </button>
                      </div>
                      <TransformComponent>
                        <img src={product.image} alt={product.title} />
                      </TransformComponent>
                    </>
                  )}
                </TransformWrapper>
              </div>
            </div>

            <div className="product-detail-info">
              <span className="product-detail-category">{product.category}</span>
              <h1 className="product-detail-title">{product.title}</h1>
              <p className="product-detail-desc">{product.description}</p>

              <div className="product-detail-actions">
                <a
                  href={`https://wa.me/919351306520?text=Hi! I'm interested in: ${product.title} (${product.category})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-whatsapp-btn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.216.462-.216l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.087.276.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.828z"/>
                  </svg>
                  Inquiry on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail
