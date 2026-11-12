import { AlertTriangle, Home, MessageCircleHeart, Rocket, TrendingUp } from 'lucide-react';
import { Button, Divider, Heading } from '../components/atoms';
import { ContentBlock, FeatureCard, PageHeader } from '../components/molecules';
import { RubricGuidePanel } from '../components/organisms';
import { blogContent } from '../data/blogContent';

export function ChallengesPage({ showGuides }) {
  const { blogMeta, page3Challenges } = blogContent;

  return (
    <div>
      <PageHeader
        badge={page3Challenges.badge}
        icon={Rocket}
        title={page3Challenges.title}
        subtitle={`${page3Challenges.subtitle} Análisis aplicado a ${blogMeta.technologyName}.`}
      />

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

      <section className="section-block">
        <div className="section-header">
          <Heading level={2}>Tendencias futuras</Heading>
        </div>
        <div className="grid-2">
          {page3Challenges.futureTrends.map((trend) => (
            <FeatureCard
              key={trend.id}
              icon={TrendingUp}
              badge={trend.horizon}
              title={trend.title}
              description={trend.description}
            />
          ))}
        </div>
      </section>

      <section className="section-block">
        <ContentBlock
          badge="Postura crítica"
          title="Opinión personal sobre su impacto en la sociedad"
          icon={MessageCircleHeart}
          highlight
        >
          <p style={{ margin: 0, lineHeight: 1.75 }}>{page3Challenges.personalOpinion}</p>
        </ContentBlock>
      </section>

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <Button to="/ventajas" variant="secondary">
          Anterior: Página 2 (Ventajas y aplicaciones)
        </Button>
        <Button to="/" variant="primary" icon={Home}>
          Volver a la página principal
        </Button>
      </div>

      {showGuides && (
        <>
          <Divider />
          <RubricGuidePanel
            title="Requisitos de la Página 3: Retos y futuro"
            items={[
              'Desafíos o riesgos asociados a la tecnología',
              'Tendencias futuras proyectadas',
              'Opinión personal sobre su impacto en la sociedad',
            ]}
          />
        </>
      )}
    </div>
  );
}
