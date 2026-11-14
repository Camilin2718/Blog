import { Briefcase, GraduationCap, Home, LayoutGrid } from 'lucide-react';
import { FeatureCard } from '../molecules';

const ICON_BY_AREA = {
  'Vida cotidiana': Home,
  Educación: GraduationCap,
  Empresas: Briefcase,
};

export function ApplicationsShowcase({ applications }) {
  return (
    <div className="grid-3">
      {applications.map((item) => (
        <FeatureCard
          key={item.id}
          icon={ICON_BY_AREA[item.area] || LayoutGrid}
          badge={item.area}
          title={item.headline}
          description={item.description}
        />
      ))}
    </div>
  );
}
