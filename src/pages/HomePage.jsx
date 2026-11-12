import { BookOpen, Sparkles } from 'lucide-react';
import { Button, Heading, SurfaceCard } from '../components/atoms';
import { AuthorMeta, HeroBanner } from '../components/molecules';
import { PageNavigationCards } from '../components/organisms';
import { blogContent } from '../data/blogContent';

export function HomePage() {
  const { blogMeta, mainPost } = blogContent;
  const postTitle = `La importancia de ${blogMeta.technologyName} en la actualidad`;

  return (
    <div>
      <HeroBanner
        blogTitle={blogMeta.blogTitle}
        blogSubtitle={blogMeta.blogSubtitle}
        description={blogMeta.description}
        technologyName={blogMeta.technologyName}
        bannerImage={blogMeta.bannerImage}
        bannerAlt={blogMeta.bannerAlt}
      />

      <div style={{ marginTop: '1.5rem' }}>
        <AuthorMeta
          studentName={blogMeta.studentName}
          institution={blogMeta.institution}
          publishDate={blogMeta.publishDate}
        />
      </div>

      <section className="section-block">
        <SurfaceCard highlight>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.25rem',
            }}
          >
            <div style={{ maxWidth: '64ch' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--accent-primary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  marginBottom: '0.45rem',
                }}
              >
                <Sparkles size={15} aria-hidden="true" />
                <span>PUBLICACIÓN DESTACADA</span>
              </div>
              <Heading level={2}>{postTitle}</Heading>
              <p style={{ margin: '0.55rem 0 0', color: 'var(--text-secondary)' }}>
                {mainPost.paragraphs[0]}
              </p>
            </div>

            <Button to="/entrada" variant="primary" icon={BookOpen}>
              Leer entrada completa
            </Button>
          </div>
        </SurfaceCard>
      </section>

      <PageNavigationCards technologyName={blogMeta.technologyName} />
    </div>
  );
}
