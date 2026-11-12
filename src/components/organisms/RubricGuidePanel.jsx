import { CheckSquare } from 'lucide-react';
import { Badge, Heading } from '../atoms';

export function RubricGuidePanel({ title = 'Lista de verificación para esta vista', items = [] }) {
  if (!items.length) return null;

  return (
    <aside className="rubric-panel" aria-label="Guía de requisitos">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
        <Heading level={4}>{title}</Heading>
        <Badge variant="neutral">Ocultable con "Modo Captura"</Badge>
      </div>
      <ul className="rubric-list">
        {items.map((item, idx) => (
          <li key={idx}>
            <CheckSquare size={16} color="var(--accent-primary)" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
