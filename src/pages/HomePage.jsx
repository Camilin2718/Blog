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

      <PageNavigationCards technologyName={blogMeta.technologyName} />
    </div>
  );
}
