import { useEffect } from 'react'
import './Lightbox.css'

const Lightbox = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  if (!images || images.length === 0) return null

  const current = images[currentIndex]

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>
        &times;
      </button>

      <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); onPrev() }}>
        &#8249;
      </button>

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-image-wrap">
          {current.type === 'video' ? (
            current.src.includes('youtube.com') || current.src.includes('youtu.be') ? (
              <iframe
                src={`https://www.youtube.com/embed/${current.src.split('v=')[1] || current.src.split('/').pop()}`}
                title={current.title || 'Gallery video'}
                className="lightbox-video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                src={current.src}
                controls
                autoPlay
                className="lightbox-video"
              />
            )
          ) : (
            <img
              src={current.src}
              alt={current.title || 'Gallery image'}
              className="lightbox-image"
            />
          )}
        </div>
        {current.title && (
          <div className="lightbox-caption">
            {current.title}
          </div>
        )}
      </div>

      <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); onNext() }}>
        &#8250;
      </button>

      <div className="lightbox-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}

export default Lightbox
