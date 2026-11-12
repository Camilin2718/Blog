import { useEffect, useRef, useState } from 'react';
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

const ROUTE_ORDER = ['/', '/entrada', '/que-es', '/ventajas', '/retos-futuro'];

function AnimatedRoutes() {
  const location = useLocation();
  const prevIndexRef = useRef(ROUTE_ORDER.indexOf(location.pathname));
  const currentIndex = ROUTE_ORDER.indexOf(location.pathname);

  let directionClass = 'page-transition--fade';
  if (prevIndexRef.current !== -1 && currentIndex !== -1 && prevIndexRef.current !== currentIndex) {
    directionClass =
      currentIndex > prevIndexRef.current
        ? 'page-transition--forward'
        : 'page-transition--backward';
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    prevIndexRef.current = currentIndex;
  }, [location.pathname, currentIndex]);

  return (
    <div key={location.pathname} className={`page-transition ${directionClass}`}>
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/entrada" element={<PostPage />} />
        <Route path="/que-es" element={<WhatIsPage />} />
        <Route path="/ventajas" element={<AdvantagesPage />} />
        <Route path="/retos-futuro" element={<ChallengesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('blog-theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('blog-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <BrowserRouter>
      <MainLayout
        blogMeta={blogContent.blogMeta}
        theme={theme}
        onToggleTheme={toggleTheme}
      >
        <AnimatedRoutes />
      </MainLayout>
    </BrowserRouter>
  );
}
