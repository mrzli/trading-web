import type { CSSProperties, FC } from 'react';
import { Link, Outlet } from 'react-router';

const navStyle: CSSProperties = {
  display: 'flex',
  gap: '1rem',
  padding: '1rem',
};

const linkStyle: CSSProperties = {
  textDecoration: 'none',
  color: '#2563eb',
};

export const ExamplesPage: FC = () => {
  return (
    <div>
      <nav style={navStyle}>
        <Link style={linkStyle} to=''>
          Home
        </Link>
        <Link style={linkStyle} to='about'>
          About
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};
