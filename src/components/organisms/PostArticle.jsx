import { BookMarked, MessageSquareQuote } from 'lucide-react';
import { Heading, ImageSlot, SurfaceCard, WordCounterBadge } from '../atoms';
import { ContentBlock, ReferenceItem } from '../molecules';

export function PostArticle({ post }) {
  return (
    <div className="article-layout">
      <article className="article-body">
        <ImageSlot
          src={post.image}
          alt={post.imageAlt}
          caption={post.imageCaption}
          hint="Agrega una imagen relacionada con la entrada en mainPost.image"
        />

        <SurfaceCard>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <WordCounterBadge
                texts={[...post.paragraphs, post.personalConclusion]}
                minWords={300}
              />
            </div>

            {post.paragraphs.map((paragraph, index) => (
              <p key={index} className="article-paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        </SurfaceCard>

        <ContentBlock
          badge="Reflexión del autor"
          title="Conclusión personal"
          icon={MessageSquareQuote}
          highlight
        >
          <p style={{ margin: 0, lineHeight: 1.75 }}>{post.personalConclusion}</p>
        </ContentBlock>
      </article>

      <aside className="article-sidebar">
        <SurfaceCard>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.9rem' }}>
            <BookMarked size={20} color="var(--accent-primary)" aria-hidden="true" />
            <Heading level={3}>Fuentes de consulta</Heading>
          </div>
          <p style={{ margin: '0 0 1rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            Referencias confiables utilizadas para respaldar la investigación:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {post.references.map((ref, idx) => (
              <ReferenceItem key={idx} {...ref} />
            ))}
          </div>
        </SurfaceCard>
      </aside>
    </div>
  );
}
