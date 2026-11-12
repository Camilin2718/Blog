import { ImagePlus } from 'lucide-react';

export function ImageSlot({ src, alt, caption, hint = 'Agrega la URL de tu imagen en src/data/blogContent.js' }) {
  return (
    <figure className="atom-image-slot">
      {src ? (
        <img className="atom-image-slot__media" src={src} alt={alt} />
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
  );
}
