import { useState, useEffect } from 'react'
import products, { categories } from '../data/products'
import QuickViewModal from '../components/QuickViewModal'
import Reveal from '../components/Reveal'
import './Products.css'

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [visibleProducts, setVisibleProducts] = useState(products)
  const [selectedProduct, setSelectedProduct] = useState(null)

  useEffect(() => {
    if (activeCategory === 'All') {
      setVisibleProducts(products)
    } else {
      setVisibleProducts(products.filter(p => p.category === activeCategory))
    }
  }, [activeCategory])

  return (
    <div className="products-page">
      <section className="page-hero products-hero">
        <div className="page-hero-overlay"></div>
        <div className="container">
          <div className="page-hero-content">
            <h1 className="page-hero-title">Our Products</h1>
            <p className="page-hero-subtitle">Premium frames & handcrafted wooden idols</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Category Filters */}
          <Reveal className="category-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`cat-filter ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </Reveal>

          {/* Products Grid */}
          <div className="products-grid">
            {visibleProducts.map(product => (
              <Reveal key={product.id} className="product-card">
                <div className="product-image-wrap">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                    loading="lazy"
                  />
                  <div className="product-image-overlay">
                    <button className="quick-view-btn" title="Quick View" onClick={() => setSelectedProduct(product)}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-desc">{product.description}</p>
                  <a
                    href={`https://wa.me/919351306520?text=Hi! I'm interested in: ${product.title} (${product.category})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-whatsapp-btn"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.216.462-.216l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.087.276.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.828z"/>
                    </svg>
                    Inquiry on WhatsApp
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          {visibleProducts.length === 0 && (
            <div className="no-products">
              <p>No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <QuickViewModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  )
}

export default Products
