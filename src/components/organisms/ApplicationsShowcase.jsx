import { useState } from 'react';
import { Briefcase, GraduationCap, Home, LayoutGrid } from 'lucide-react';
import { FeatureCard } from '../molecules';

const ICON_BY_AREA = {
  'Vida cotidiana': Home,
  Educación: GraduationCap,
  Empresas: Briefcase,
};

export function ApplicationsShowcase({ applications }) {
  const [selectedArea, setSelectedArea] = useState('Todas');
  const areas = ['Todas', ...applications.map((item) => item.area)];

  const visibleItems =
    selectedArea === 'Todas'
      ? applications
      : applications.filter((item) => item.area === selectedArea);

  return (
    <div>
      <div className="tabs-bar" role="tablist" aria-label="Filtrar aplicaciones por ámbito">
        {areas.map((area) => {
          const Icon = ICON_BY_AREA[area] || LayoutGrid;
          const isActive = selectedArea === area;
          return (
            <button
              key={area}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setSelectedArea(area)}
              className={`tab-btn ${isActive ? 'tab-btn--active' : ''}`}
            >
              <Icon size={16} aria-hidden="true" />
              <span>{area}</span>
            </button>
          );
        })}
      </div>

      <div className={visibleItems.length === 1 ? 'grid-2' : 'grid-3'}>
        {visibleItems.map((item) => (
          <FeatureCard
            key={item.id}
            icon={ICON_BY_AREA[item.area] || LayoutGrid}
            badge={item.area}
            title={item.headline}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
