import { ArrowRight, Compass, Cpu, Sparkles } from 'lucide-react';
import { Button, Heading, ImageSlot } from '../components/atoms';
import { ContentBlock, FeatureCard, PageHeader } from '../components/molecules';
import { blogContent } from '../data/blogContent';

export function WhatIsPage() {
  const { blogMeta, page1WhatIs } = blogContent;

  return (
    <div>
      <PageHeader
        badge={page1WhatIs.badge}
        icon={Cpu}
        title={`${page1WhatIs.titlePrefix} ${blogMeta.technologyName}?`}
        subtitle={page1WhatIs.subtitle}
      />

      {/* Bloque principal unificado: Definición con imagen integrada armónicamente */}
      <section className="definition-card">
        <div className="definition-card__grid">
          <div className="definition-card__body">
            <div className="definition-card__badge-row">
              <span className="atom-badge atom-badge--accent">
                <Compass size={14} aria-hidden="true" />
                <span>Definición</span>
              </span>
            </div>
            <Heading level={2} className="definition-card__title">
              Concepto general
            </Heading>
            <p className="definition-card__text">{page1WhatIs.definition}</p>
          </div>

          <div className="definition-card__media">
            <ImageSlot
              src={page1WhatIs.image}
              alt={page1WhatIs.imageAlt}
              caption={page1WhatIs.imageCaption}
              hint="Agrega al menos una imagen en page1WhatIs.image"
            />
          </div>
        </div>
      </section>

      {/* Características principales */}
      <section className="section-block">
        <div className="section-header">
          <Heading level={2}>Características principales</Heading>
        </div>
        <div className="grid-3">
          {page1WhatIs.characteristics.map((item, idx) => (
            <FeatureCard
              key={item.id}
              marker={`0${idx + 1}`}
              badge="Característica"
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      {/* Importancia actual */}
      <section className="section-block">
        <ContentBlock badge="Contexto actual" title="Importancia en la actualidad" icon={Sparkles}>
          <p style={{ margin: 0, lineHeight: 1.75 }}>{page1WhatIs.currentImportance}</p>
        </ContentBlock>
      </section>

      {/* Navegación inferior */}
      <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <Button to="/entrada" variant="secondary">
          Anterior: Entrada del Blog
        </Button>
        <Button to="/ventajas" variant="primary" icon={ArrowRight}>
          Siguiente: Página 2 (Ventajas y aplicaciones)
        </Button>
      </div>
    </div>
  );
}
