import { FeatureCard } from '../molecules';

export function AdvantagesGrid({ advantages }) {
  return (
    <div className="grid-3">
      {advantages.map((item) => (
        <FeatureCard
          key={item.id}
          marker={item.number}
          badge="Ventaja"
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}
