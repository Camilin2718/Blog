import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ImagePlus, Maximize2, X } from 'lucide-react';

export function ImageSlot({
  src,
  alt,
  caption,
  hint = 'Agrega la URL de tu imagen en src/data/blogContent.js',
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setLightboxOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen]);

  return (
    <>
      <figure className="atom-image-slot">
        {src ? (
          <div
            className="atom-image-slot__media-wrapper"
            onClick={() => setLightboxOpen(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setLightboxOpen(true);
              }
            }}
            title="Haz clic para ampliar la imagen"
            aria-label={`Ampliar imagen: ${alt || caption || 'Imagen relacionada'}`}
          >
            <img
              className="atom-image-slot__media atom-image-slot__media--interactive"
              src={src}
              alt={alt}
            />
            <div className="atom-image-slot__zoom-badge" aria-hidden="true">
              <Maximize2 size={13} />
              <span>Ampliar</span>
            </div>
          </div>
        ) : (
          <div className="atom-image-slot__placeholder">
            <div className="atom-image-slot__icon-box">
              <ImagePlus size={26} aria-hidden="true" />
            </div>
            <strong>Espacio reservado para imagen relacionada</strong>
            <span style={{ fontSize: '0.88rem', maxWidth: '42ch' }}>{hint}</span>
          </div>
        )}
        {caption && <figcaption className="atom-image-slot__caption">{caption}</figcaption>}
      </figure>

      {/* Lightbox Modal con Portal */}
      {lightboxOpen &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            className="lightbox-overlay"
            onClick={() => setLightboxOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Vista ampliada de la imagen"
          >
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="lightbox-close-btn"
                onClick={() => setLightboxOpen(false)}
                aria-label="Cerrar vista previa"
              >
                <X size={20} />
              </button>
              <img src={src} alt={alt} className="lightbox-image" />
              {caption && <p className="lightbox-caption">{caption}</p>}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
