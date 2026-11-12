import { ArrowRight, BookOpen, Cpu, Layers, Rocket } from 'lucide-react';
import { Badge, Button, Heading, SurfaceCard } from '../atoms';

const CARDS = [
  {
    to: '/entrada',
    badge: 'Entrada del Blog',
    icon: BookOpen,
    title: 'La importancia en la actualidad',
    description:
      'Publicación principal (mínimo 300 palabras), imagen relacionada, fuente confiable y conclusión personal.',
    cta: 'Ir a la entrada',
  },
  {
    to: '/que-es',
    badge: 'Página 1',
    icon: Cpu,
    title: '¿Qué es la tecnología?',
    description:
      'Definición clara, características principales, relevancia contemporánea e imagen ilustrativa.',
    cta: 'Abrir Página 1',
  },
  {
    to: '/ventajas',
    badge: 'Página 2',
    icon: Layers,
    title: 'Ventajas y aplicaciones',
    description:
      'Mínimo tres ventajas y sus usos en la vida cotidiana, la educación y las empresas.',
    cta: 'Abrir Página 2',
  },
  {
    to: '/retos-futuro',
    badge: 'Página 3',
    icon: Rocket,
    title: 'Retos y futuro',
    description:
      'Desafíos o riesgos asociados, tendencias futuras y opinión personal sobre su impacto social.',
    cta: 'Abrir Página 3',
  },
];

export function PageNavigationCards({ technologyName }) {
  return (
    <section className="section-block">
      <div className="section-header">
        <div>
          <Heading level={2}>Mapa de contenidos del blog</Heading>
          <p style={{ margin: '0.35rem 0 0', color: 'var(--text-secondary)' }}>
            Todas las páginas y la entrada principal sobre <strong>{technologyName}</strong> accesibles desde un solo lugar.
          </p>
        </div>
      </div>

      <div className="grid-2">
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
                <p style={{ margin: 0, color: 'var(--text-secondary)', flex: 1 }}>
                  {card.description}
                </p>
                <div>
                  <Button to={card.to} variant="secondary" icon={ArrowRight}>
                    {card.cta}
                  </Button>
                </div>
              </div>
            </SurfaceCard>
          );
        })}
      </div>
    </section>
  );
}
