import { ArrowRight, Layers } from 'lucide-react';
import { Button, Heading, ImageSlot } from '../components/atoms';
import { PageHeader } from '../components/molecules';
import { AdvantagesGrid, ApplicationsShowcase } from '../components/organisms';
import { blogContent } from '../data/blogContent';

export function AdvantagesPage() {
  const { page2Advantages } = blogContent;

  return (
    <div>
      <PageHeader
        badge={page2Advantages.badge}
        icon={Layers}
        title={page2Advantages.title}
        subtitle={page2Advantages.subtitle}
      />

      {/* Ventajas */}
      <section>
        <div className="section-header">
          <Heading level={2}>Ventajas principales</Heading>
        </div>
        <AdvantagesGrid advantages={page2Advantages.advantages} />
      </section>

      {/* Aplicaciones o usos */}
      <section className="section-block">
        <div className="section-header">
          <Heading level={2}>Aplicaciones o usos en la vida cotidiana, educación o empresas</Heading>
        </div>
        <ApplicationsShowcase applications={page2Advantages.applications} />
      </section>

      {/* Imágenes de la sección */}
      <section className="section-block">
        <div className="section-header">
          <Heading level={2}>Evidencias y casos de uso</Heading>
        </div>
        <div className="grid-2">
          <ImageSlot
            src={page2Advantages.image1}
            alt="Siemens automatización"
            caption={page2Advantages.image1Caption}
          />
          <ImageSlot
            src={page2Advantages.image2}
            alt="Asistente virtual Alexa"
            caption={page2Advantages.image2Caption}
          />
        </div>
      </section>

      {/* Navegación */}
      <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <Button to="/" variant="secondary">
          Anterior: 1. ¿Qué es?
        </Button>
        <Button to="/retos-futuro" variant="primary" icon={ArrowRight}>
          Siguiente: 3. Retos, futuro y opinión
        </Button>
      </div>
    </div>
  );
}
