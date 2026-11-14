import { ArrowRight, Compass, Cpu } from 'lucide-react';
import { Button, Heading, ImageSlot } from '../components/atoms';
import { AuthorMeta, FeatureCard, PageHeader } from '../components/molecules';
import { blogContent } from '../data/blogContent';

export function WhatIsPage() {
  const { blogMeta, page1WhatIs } = blogContent;

  return (
    <div>
      {/* Encabezado de la página */}
      <PageHeader
        badge={page1WhatIs.badge}
        icon={Cpu}
        title="La importancia de la inteligencia artificial en la actualidad"
        subtitle={blogMeta.blogSubtitle}
      />

      <div style={{ marginBottom: '2rem' }}>
        <AuthorMeta
          studentName={blogMeta.studentName}
          institution={blogMeta.institution}
          publishDate={blogMeta.publishDate}
        />
      </div>

      {/* Definición con el título "Inteligencia artificial" y badge "Definición" */}
      <section id="definicion" className="definition-card">
        <div className="definition-card__grid">
          <div className="definition-card__body">
            <div className="definition-card__badge-row">
              <span className="atom-badge atom-badge--accent">
                <Compass size={14} aria-hidden="true" />
                <span>Definición</span>
              </span>
            </div>
            <Heading level={2} className="definition-card__title">
              Inteligencia artificial
            </Heading>
            <div
              className="definition-card__text"
              style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}
            >
              {page1WhatIs.definition.split('\n\n').map((p, idx) => (
                <p key={idx} style={{ margin: 0 }}>
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="definition-card__media">
            <ImageSlot
              src={page1WhatIs.image1}
              alt="Robots en proceso de ensamblaje"
              caption={page1WhatIs.image1Caption}
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

      {/* Importancia en la actualidad */}
      <section className="section-block">
        <div className="section-header">
          <Heading level={2}>Importancia en la actualidad</Heading>
        </div>
        <div className="grid-2" style={{ alignItems: 'stretch' }}>
          <div
            className="atom-surface atom-surface--padded"
            style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}
          >
            <ul
              style={{
                margin: 0,
                paddingLeft: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                lineHeight: 1.75,
              }}
            >
              {page1WhatIs.currentImportance.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>

          <div>
            <ImageSlot
              src={page1WhatIs.image2}
              alt="Clasificación automatizada"
              caption={page1WhatIs.image2Caption}
            />
          </div>
        </div>
      </section>


      {/* Navegación al siguiente tema */}
      <div
        style={{
          marginTop: '2.5rem',
          display: 'flex',
          justifyContent: 'flex-end',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <Button to="/ventajas" variant="primary" icon={ArrowRight}>
          Siguiente: 2. Ventajas y aplicaciones
        </Button>
      </div>
    </div>
  );
}
