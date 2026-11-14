import { ScrollToTopButton } from '../atoms';
import { Footer, Navbar } from '../organisms';

export function MainLayout({ children, blogMeta, theme, onToggleTheme }) {
  return (
    <div className="main-layout">
      <Navbar
        blogTitle={blogMeta.blogTitle}
        theme={theme}
        onToggleTheme={onToggleTheme}
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

      {/* Botón flotante para volver arriba */}
      <ScrollToTopButton />
    </div>
  );
}
