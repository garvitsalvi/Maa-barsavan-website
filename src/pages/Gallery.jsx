import { useState, useEffect } from 'react'
import galleryImages, { galleryCategories } from '../data/gallery'
import Lightbox from '../components/Lightbox'
import './Gallery.css'

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [filteredImages, setFilteredImages] = useState(galleryImages)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.05 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [filteredImages])

  useEffect(() => {
    setFilteredImages(
      activeCategory === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory)
    )
  }, [activeCategory])

  const openLightbox = (index) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const renderMedia = (item) => {
    if (item.type === 'video') {
      if (item.src.includes('youtube.com') || item.src.includes('youtu.be')) {
        const videoId = item.src.split('v=')[1] || item.src.split('/').pop()
        return (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={item.title}
            className="gallery-media"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        )
      }
      return (
        <video
          src={item.src}
          className="gallery-media"
          controls
          autoPlay
          muted
          loop
          playsInline
        />
      )
    }
    return (
      <img
        src={item.src}
        alt={item.title}
        className="gallery-img"
        loading="lazy"
      />
    )
  }

  const closeLightbox = () => setLightboxOpen(false)

  const prevImage = () => {
    setCurrentIndex(prev => (prev === 0 ? filteredImages.length - 1 : prev - 1))
  }

  const nextImage = () => {
    setCurrentIndex(prev => (prev === filteredImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="gallery-page">
      <section className="page-hero gallery-hero">
        <div className="page-hero-overlay"></div>
        <div className="container">
          <div className="page-hero-content">
            <h1 className="page-hero-title">Our Gallery</h1>
            <p className="page-hero-subtitle">See our work — frames, idols, showroom & craftsmanship</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-filters reveal">
            {galleryCategories.map(cat => (
              <button
                key={cat}
                className={`gallery-filter ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredImages.map((img, index) => (
              <div
                key={img.id}
                className={`gallery-item reveal ${img.type === 'video' ? 'gallery-item-video' : ''}`}
                onClick={() => openLightbox(index)}
              >
                {renderMedia(img)}
                <div className="gallery-item-overlay">
                  <span className="gallery-item-title">{img.title}</span>
                  <span className="gallery-item-category">{img.category}</span>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="no-gallery">
              <p>No images in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {lightboxOpen && (
        <Lightbox
          images={filteredImages}
          currentIndex={currentIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </div>
  )
}

export default Gallery
