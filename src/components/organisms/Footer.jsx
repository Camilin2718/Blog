import { Link } from 'react-router-dom';

export function Footer({ blogTitle, studentName, institution, technologyName }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <strong style={{ color: 'var(--text-primary)' }}>{blogTitle}</strong>
          <div style={{ marginTop: '0.2rem' }}>
            Tema: {technologyName} • Elaborado por {studentName} ({institution})
          </div>
        </div>

        <nav aria-label="Enlaces del pie de página" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/">1. ¿Qué es?</Link>
          <Link to="/ventajas">2. Ventajas y usos</Link>
          <Link to="/retos-futuro">3. Retos y futuro</Link>
        </nav>
      </div>
    </footer>
  );
}
