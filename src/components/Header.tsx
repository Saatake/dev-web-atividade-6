import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="space-header">
      <div className="logo-container">
        <h1><span>Cosmic</span>.App</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">To-Do List</Link></li>
          <li><Link to="/contador">Contador</Link></li>
          <li><Link to="/jogo">Jogo da Velha</Link></li>
          <li><Link to="/calculadora">Calculadora</Link></li>
          <li><Link to="/cep">Buscador CEP</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;