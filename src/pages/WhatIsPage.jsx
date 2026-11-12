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

      <div className="grid-2" style={{ alignItems: 'start' }}>
        <ContentBlock badge="Definición" title="Concepto general" icon={Compass} highlight>
          <p style={{ margin: 0, lineHeight: 1.75 }}>{page1WhatIs.definition}</p>
        </ContentBlock>

        <ImageSlot
          src={page1WhatIs.image}
          alt={page1WhatIs.imageAlt}
          caption={page1WhatIs.imageCaption}
          hint="Agrega al menos una imagen relacionada en page1WhatIs.image"
        />
      </div>

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

      <section className="section-block">
        <ContentBlock badge="Contexto actual" title="Importancia en la actualidad" icon={Sparkles}>
          <p style={{ margin: 0, lineHeight: 1.75 }}>{page1WhatIs.currentImportance}</p>
        </ContentBlock>
      </section>

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
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
