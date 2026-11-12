import { Building2, Calendar, Clock, User } from 'lucide-react';

export function AuthorMeta({ studentName, institution, publishDate, readingTime }) {
  return (
    <div className="author-meta">
      <span className="author-meta__item">
        <User size={16} aria-hidden="true" />
        <strong>Autor:</strong> {studentName}
      </span>
      <span className="author-meta__item">
        <Building2 size={16} aria-hidden="true" />
        {institution}
      </span>
      <span className="author-meta__item">
        <Calendar size={16} aria-hidden="true" />
        {publishDate}
      </span>
      {readingTime && (
        <span className="author-meta__item">
          <Clock size={16} aria-hidden="true" />
          {readingTime}
        </span>
      )}
    </div>
  );
}
