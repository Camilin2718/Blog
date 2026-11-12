import { ArrowRight, Layers } from 'lucide-react';
import { Button, Heading, ImageSlot } from '../components/atoms';
import { PageHeader } from '../components/molecules';
import { AdvantagesGrid, ApplicationsShowcase } from '../components/organisms';
import { blogContent } from '../data/blogContent';

export function AdvantagesPage() {
  const { blogMeta, page2Advantages } = blogContent;

  return (
    <div>
      <PageHeader
        badge={page2Advantages.badge}
        icon={Layers}
        title={page2Advantages.title}
        subtitle={`${page2Advantages.subtitle} Enfoque en ${blogMeta.technologyName}.`}
      />

      <section>
        <div className="section-header">
          <Heading level={2}>Ventajas principales</Heading>
        </div>
        <AdvantagesGrid advantages={page2Advantages.advantages} />
      </section>

      <section className="section-block">
        <div className="section-header">
          <Heading level={2}>Aplicaciones y usos reales</Heading>
        </div>
        <ApplicationsShowcase applications={page2Advantages.applications} />
      </section>

      <section className="section-block">
        <ImageSlot
          src={page2Advantages.image}
          alt={page2Advantages.imageAlt}
          caption={page2Advantages.imageCaption}
          hint="Agrega al menos una imagen relacionada en page2Advantages.image"
        />
      </section>

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <Button to="/que-es" variant="secondary">
          Anterior: Página 1 (¿Qué es?)
        </Button>
        <Button to="/retos-futuro" variant="primary" icon={ArrowRight}>
          Siguiente: Página 3 (Retos y futuro)
        </Button>
      </div>
    </div>
  );
}
