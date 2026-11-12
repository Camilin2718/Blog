import { ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '../components/atoms';
import { AuthorMeta, PageHeader } from '../components/molecules';
import { PostArticle } from '../components/organisms';
import { blogContent } from '../data/blogContent';

export function PostPage() {
  const { blogMeta, mainPost } = blogContent;
  const postTitle = `La importancia de ${blogMeta.technologyName} en la actualidad`;

  return (
    <div>
      <PageHeader
        badge={mainPost.category}
        icon={BookOpen}
        title={postTitle}
        subtitle={`Publicación principal del blog sobre ${blogMeta.technologyName}.`}
      />

      <div style={{ marginBottom: '1.75rem' }}>
        <AuthorMeta
          studentName={blogMeta.studentName}
          institution={blogMeta.institution}
          publishDate={blogMeta.publishDate}
          readingTime={mainPost.readingTime}
        />
      </div>

      <PostArticle post={mainPost} />

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <Button to="/" variant="secondary">
          Volver al inicio
        </Button>
        <Button to="/que-es" variant="primary" icon={ArrowRight}>
          Continuar a Página 1: ¿Qué es?
        </Button>
      </div>
    </div>
  );
}
