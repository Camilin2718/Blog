import { ArrowRight, BookOpen, Image as ImageIcon, Sparkles } from 'lucide-react';
import { Badge, Button, Heading } from '../atoms';

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
          <Badge variant="hero" icon={Sparkles}>
            Tendencia: {technologyName}
          </Badge>
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
            <Button to="/entrada" variant="primary" icon={BookOpen}>
              Leer entrada principal
            </Button>
            <Button
              to="/que-es"
              variant="secondary"
              icon={ArrowRight}
              style={{
                background: 'rgba(255,255,255,0.1)',
                color: '#ffffff',
                borderColor: 'rgba(255,255,255,0.22)',
              }}
            >
              Explorar Página 1
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
