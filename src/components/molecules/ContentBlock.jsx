import { Badge, Heading, SurfaceCard } from '../atoms';

export function ContentBlock({
  badge,
  title,
  icon: Icon,
  children,
  highlight = false,
  className = '',
}) {
  return (
    <SurfaceCard highlight={highlight} className={className}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
        {badge && (
          <div>
            <Badge variant="accent" icon={Icon}>
              {badge}
            </Badge>
          </div>
        )}
        <Heading level={2}>{title}</Heading>
        <div style={{ color: 'var(--text-secondary)', fontSize: '1.02rem' }}>{children}</div>
      </div>
    </SurfaceCard>
  );
}
