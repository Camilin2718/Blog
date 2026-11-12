import { CheckCircle2, FileText } from 'lucide-react';
import { Badge } from './Badge';

export function WordCounterBadge({ texts = [], minWords = 300 }) {
  const wordCount = texts
    .join(' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const isComplete = wordCount >= minWords;

  return (
    <Badge
      variant={isComplete ? 'success' : 'warning'}
      icon={isComplete ? CheckCircle2 : FileText}
    >
      {wordCount} / {minWords} palabras mínimas
    </Badge>
  );
}
