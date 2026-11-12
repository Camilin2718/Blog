import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { MainLayout } from './components/templates';
import {
  AdvantagesPage,
  ChallengesPage,
  HomePage,
  PostPage,
  WhatIsPage,
} from './pages';
import { blogContent } from './data/blogContent';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('blog-theme') || 'light';
  });
  const [showGuides, setShowGuides] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('blog-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  const toggleGuides = () => setShowGuides((prev) => !prev);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainLayout
        blogMeta={blogContent.blogMeta}
        theme={theme}
        onToggleTheme={toggleTheme}
        showGuides={showGuides}
        onToggleGuides={toggleGuides}
      >
        <Routes>
          <Route path="/" element={<HomePage showGuides={showGuides} />} />
          <Route path="/entrada" element={<PostPage showGuides={showGuides} />} />
          <Route path="/que-es" element={<WhatIsPage showGuides={showGuides} />} />
          <Route path="/ventajas" element={<AdvantagesPage showGuides={showGuides} />} />
          <Route path="/retos-futuro" element={<ChallengesPage showGuides={showGuides} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
