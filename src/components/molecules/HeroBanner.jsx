import { ArrowDown, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { Button, Heading } from '../atoms';

export function HeroBanner({
  blogTitle,
  blogSubtitle,
  description,
  technologyName,
  bannerImage,
  bannerAlt,
}) {
  return (
    <section className="hero-banner">
      <div className="hero-banner__glow" aria-hidden="true" />
      <div className="hero-banner__grid">
        <div>
          <Heading level={1} className="hero-banner__title">
            {blogTitle}
          </Heading>
          <p
            style={{
              margin: '0 0 0.6rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.88rem',
              color: '#7dd3fc',
            }}
          >
            {blogSubtitle}
          </p>
          <p className="hero-banner__description">{description}</p>

          <div className="hero-banner__actions">
            <a
              href="#definicion"
              className="atom-button atom-button--primary"
              style={{ textDecoration: 'none' }}
            >
              <span>Explorar contenido</span>
              <ArrowDown size={16} aria-hidden="true" />
            </a>
            <Button
              to="/ventajas"
              variant="secondary"
              icon={ArrowRight}
              style={{
                background: 'rgba(255,255,255,0.1)',
                color: '#ffffff',
                borderColor: 'rgba(255,255,255,0.22)',
              }}
            >
              2. Ventajas y usos
            </Button>
          </div>
        </div>

        <div className="hero-banner__media">
          {bannerImage ? (
            <img src={bannerImage} alt={bannerAlt} />
          ) : (
            <div className="hero-banner__media-placeholder">
              <ImageIcon size={34} aria-hidden="true" />
              <strong>Banner personalizado del tema</strong>
              <span style={{ fontSize: '0.86rem', color: '#94a3b8', maxWidth: '30ch' }}>
                Añade tu imagen o banner en <code>bannerImage</code> dentro de{' '}
                <code>src/data/blogContent.js</code>
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
