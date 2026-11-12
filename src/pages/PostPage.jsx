import { ArrowRight, BookOpen } from 'lucide-react';
import { Button, Divider } from '../components/atoms';
import { AuthorMeta, PageHeader } from '../components/molecules';
import { PostArticle, RubricGuidePanel } from '../components/organisms';
import { blogContent } from '../data/blogContent';

export function PostPage({ showGuides }) {
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

      <PostArticle post={mainPost} showGuides={showGuides} />

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <Button to="/" variant="secondary">
          Volver al inicio
        </Button>
        <Button to="/que-es" variant="primary" icon={ArrowRight}>
          Continuar a Página 1: ¿Qué es?
        </Button>
      </div>

      {showGuides && (
        <>
          <Divider />
          <RubricGuidePanel
            title="Requisitos de la Entrada del Blog"
            items={[
              'Título: "La importancia de [nombre de la tecnología] en la actualidad"',
              'Extensión mínima de 300 palabras',
              'Al menos una imagen relacionada',
              'Mínimo una fuente de consulta confiable y conclusión personal',
            ]}
          />
        </>
      )}
    </div>
  );
}
