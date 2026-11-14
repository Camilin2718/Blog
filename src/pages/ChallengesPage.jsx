import { useState } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  Check,
  CheckCircle2,
  Copy,
  HeartHandshake,
  Home,
  Lightbulb,
  MessageSquareQuote,
  Quote,
  Rocket,
  ShieldAlert,
  TrendingUp,
} from 'lucide-react';
import { Button, Heading } from '../components/atoms';
import { FeatureCard, PageHeader } from '../components/molecules';
import { blogContent } from '../data/blogContent';

export function ChallengesPage() {
  const { blogMeta, page3Challenges, opinionPage } = blogContent;
  const [quoteCopied, setQuoteCopied] = useState(false);

  const handleCopyQuote = () => {
    const textToCopy = `«Entre más utilicemos esta tecnología, nuestro intelecto disminuirá si dejamos de utilizar nuestras propias capacidades para pensar y resolver las cosas por optar siempre por lo más fácil y rápido». — ${blogMeta.studentName} (${blogMeta.institution})`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setQuoteCopied(true);
      setTimeout(() => setQuoteCopied(false), 2200);
    });
  };

  return (
    <div>
      <PageHeader
        badge={page3Challenges.badge}
        icon={Rocket}
        title={page3Challenges.title}
        subtitle={page3Challenges.subtitle}
      />

      {/* Desafíos o riesgos asociados */}
      <section>
        <div className="section-header">
          <Heading level={2}>Desafíos o riesgos asociados</Heading>
        </div>
        <div className="grid-3">
          {page3Challenges.challenges.map((risk, idx) => (
            <FeatureCard
              key={risk.id}
              icon={AlertTriangle}
              badge={`Riesgo 0${idx + 1}`}
              title={risk.title}
              description={risk.description}
            />
          ))}
        </div>
      </section>

      {/* Tendencias futuras */}
      <section className="section-block">
        <div className="section-header">
          <Heading level={2}>Tendencias futuras</Heading>
        </div>
        <div>
          {page3Challenges.futureTrends.map((trend) => (
            <div
              key={trend.id}
              className="atom-surface atom-surface--padded"
              style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--accent-primary)',
                }}
              >
                <TrendingUp size={20} aria-hidden="true" />
                <strong style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                  {trend.horizon}
                </strong>
              </div>
              <Heading level={3}>{trend.title}</Heading>
              <p
                style={{
                  margin: 0,
                  color: 'var(--text-secondary)',
                  fontSize: '1.02rem',
                  lineHeight: 1.8,
                }}
              >
                {trend.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Opinión personal sobre su impacto en la sociedad (con el diseño editorial completo) */}
      <section className="section-block">
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <MessageSquareQuote size={24} color="var(--accent-primary)" />
            <Heading level={2}>Opinión personal sobre su impacto en la sociedad</Heading>
          </div>
          <p style={{ margin: '0.35rem 0 0', color: 'var(--text-secondary)' }}>
            {opinionPage.subtitle}
          </p>
        </div>

        {/* Cita destacada inicial con botón interactivo de copiado */}
        <div className="opinion-quote-banner" style={{ marginBottom: '1.75rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', flex: 1, minWidth: '260px' }}>
              <Quote size={28} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <p style={{ margin: 0, fontWeight: 500 }}>
                  «Entre más utilicemos esta tecnología, nuestro intelecto disminuirá si dejamos de utilizar
                  nuestras propias capacidades para pensar y resolver las cosas por optar siempre por lo más
                  fácil y rápido».
                </p>
                <span
                  style={{
                    display: 'block',
                    marginTop: '0.45rem',
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    fontStyle: 'normal',
                    fontWeight: 600,
                  }}
                >
                  — {blogMeta.studentName} ({blogMeta.institution})
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCopyQuote}
              className="copy-quote-btn"
              title="Copiar cita textual al portapapeles"
              aria-label="Copiar cita textual al portapapeles"
            >
              {quoteCopied ? <Check size={14} color="#16a34a" /> : <Copy size={14} />}
              <span>{quoteCopied ? '¡Copiado!' : 'Copiar cita'}</span>
            </button>
          </div>
        </div>

        {/* Layout editorial de 2 columnas */}
        <div className="opinion-layout">
          <div className="opinion-main">
            <div
              className="atom-surface atom-surface--padded"
              style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  color: 'var(--accent-primary)',
                }}
              >
                <HeartHandshake size={22} aria-hidden="true" />
                <strong style={{ fontSize: '1.05rem', fontFamily: 'var(--font-display)' }}>
                  Postura crítica del autor
                </strong>
              </div>

              {opinionPage.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="article-paragraph"
                  style={{
                    margin: 0,
                    fontSize: '1.05rem',
                    lineHeight: '1.85',
                    color: 'var(--text-primary)',
                  }}
                >
                  {p}
                </p>
              ))}

              {/* Cuadro complementario de balance */}
              <div
                style={{
                  marginTop: '0.5rem',
                  padding: '1rem 1.25rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-surface-alt)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                }}
              >
                <Lightbulb size={22} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                    Hacia un uso consciente y formativo
                  </strong>
                  <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    La inteligencia artificial representa un catalizador extraordinario cuando se concibe como
                    un copiloto o fuente de orientación, siempre supeditada al criterio y esfuerzo investigativo personal.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Barra lateral con síntesis de puntos clave de la postura */}
          <aside className="opinion-sidebar">
            <div
              className="atom-surface atom-surface--padded"
              style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--accent-primary)',
                }}
              >
                <ShieldAlert size={20} aria-hidden="true" />
                <Heading level={3}>Puntos clave de la reflexión</Heading>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {opinionPage.takeaways.map((item, i) => (
                  <div key={i} className="opinion-takeaway-card">
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        color: 'var(--text-primary)',
                        fontWeight: 600,
                        marginBottom: '0.25rem',
                      }}
                    >
                      <CheckCircle2 size={16} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                      <span>{item.title}</span>
                    </div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: '0.88rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.55,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Navegación inferior */}
      <div
        style={{
          marginTop: '2.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <Button to="/ventajas" variant="secondary" icon={ArrowLeft}>
          Anterior: 2. Ventajas y aplicaciones
        </Button>
        <Button to="/" variant="primary" icon={Home}>
          Volver al Inicio (1. ¿Qué es?)
        </Button>
      </div>
    </div>
  );
}
