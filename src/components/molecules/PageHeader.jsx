import { Badge, Heading } from '../atoms';

export function PageHeader({ badge, icon, title, subtitle, extra }) {
  return (
    <header className="page-header">
      <div className="page-header__top">
        {badge && (
          <Badge variant="accent" icon={icon}>
            {badge}
          </Badge>
        )}
        {extra}
      </div>
      <Heading level={1}>{title}</Heading>
      {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
    </header>
  );
}
