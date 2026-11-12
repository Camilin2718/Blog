import { ExternalLink } from 'lucide-react';

export function ReferenceItem({ title, authorOrSource, year, url }) {
  return (
    <div className="reference-item">
      <strong style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>{title}</strong>
      <span style={{ color: 'var(--text-secondary)', fontSize: '0.86rem' }}>
        {authorOrSource} • {year}
      </span>
      {url && (
        <a href={url} target="_blank" rel="noreferrer" className="reference-item__link">
          <span>{url}</span>
          <ExternalLink size={13} aria-hidden="true" />
        </a>
      )}
    </div>
  );
}
