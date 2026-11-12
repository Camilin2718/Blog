import { Footer, Navbar } from '../organisms';

export function MainLayout({
  children,
  blogMeta,
  theme,
  onToggleTheme,
  showGuides,
  onToggleGuides,
}) {
  return (
    <div className="main-layout">
      <Navbar
        blogTitle={blogMeta.blogTitle}
        theme={theme}
        onToggleTheme={onToggleTheme}
        showGuides={showGuides}
        onToggleGuides={onToggleGuides}
      />

      <main className="main-content">
        <div className="container">{children}</div>
      </main>

      <Footer
        blogTitle={blogMeta.blogTitle}
        studentName={blogMeta.studentName}
        institution={blogMeta.institution}
        technologyName={blogMeta.technologyName}
      />
    </div>
  );
}
