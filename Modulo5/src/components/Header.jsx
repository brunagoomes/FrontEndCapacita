import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', borderBottom: '1px solid #ccc' }}>
      <nav style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 'bold' }}>Início</Link>
        <Link to="/new" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 'bold' }}>+ Nova Tarefa</Link>
        <Link to="/stats" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 'bold' }}>Estatísticas ✨</Link>
      </nav>
      <button onClick={toggleTheme} style={{ fontSize: '20px', cursor: 'pointer', background: 'none', border: 'none' }}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </header>
  );
}