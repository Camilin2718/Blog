import { Heading, SurfaceCard } from '../atoms';

export function FeatureCard({ marker, icon: Icon, title, description, badge }) {
  return (
    <SurfaceCard interactive className="feature-card">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
        <div className="feature-card__icon">
          {Icon ? <Icon size={21} aria-hidden="true" /> : marker}
        </div>
        {badge && (
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
            }}
          >
            {badge}
          </span>
        )}
      </div>
      <Heading level={3}>{title}</Heading>
      <p className="feature-card__text">{description}</p>
    </SurfaceCard>
  );
}
