import { ArrowRight, Cpu, Layers, Rocket } from 'lucide-react';
import { Badge, Button, Heading, SurfaceCard } from '../atoms';

const CARDS = [
  {
    to: '/',
    badge: 'Página 1',
    icon: Cpu,
    title: '1. ¿Qué es la inteligencia artificial?',
    description:
      'Definición fundamental, características principales e importancia de la tecnología en la actualidad.',
    cta: 'Sección actual',
    isCurrent: true,
  },
  {
    to: '/ventajas',
    badge: 'Página 2',
    icon: Layers,
    title: '2. Ventajas y aplicaciones',
    description:
      'Beneficios clave y casos prácticos en educación, empresas y la vida cotidiana.',
    cta: 'Ir a Ventajas y usos',
    isCurrent: false,
  },
  {
    to: '/retos-futuro',
    badge: 'Página 3',
    icon: Rocket,
    title: '3. Retos, futuro y opinión personal',
    description:
      'Desafíos críticos, riesgos, tendencias emergentes y postura crítica de la autora.',
    cta: 'Ir a Retos y opinión',
    isCurrent: false,
  },
];

export function PageNavigationCards({ technologyName }) {
  return (
    <section className="section-block">
      <div className="section-header">
        <div>
          <Heading level={2}>Estructura completa del blog</Heading>
          <p style={{ margin: '0.35rem 0 0', color: 'var(--text-secondary)' }}>
            Explora las 3 páginas académicas sobre <strong>{technologyName}</strong>.
          </p>
        </div>
      </div>

      <div className="grid-3">
        {CARDS.map((card) => {
          const Icon = card.icon;
          return (
            <SurfaceCard key={card.to} interactive>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Badge variant="accent" icon={Icon}>
                    {card.badge}
                  </Badge>
                </div>
                <Heading level={3}>{card.title}</Heading>
                <p style={{ margin: 0, color: 'var(--text-secondary)', flex: 1, lineHeight: 1.6 }}>
                  {card.description}
                </p>
                <div style={{ marginTop: '0.5rem' }}>
                  {card.isCurrent ? (
                    <span
                      style={{
                        display: 'inline-block',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--accent-primary)',
                        padding: '0.45rem 0.65rem',
                        background: 'var(--bg-surface-alt)',
                        borderRadius: 'var(--radius-sm)',
                      }}
                    >
                      Página activa
                    </span>
                  ) : (
                    <Button to={card.to} variant="secondary" icon={ArrowRight}>
                      {card.cta}
                    </Button>
                  )}
                </div>
              </div>
            </SurfaceCard>
          );
        })}
      </div>
    </section>
  );
}
