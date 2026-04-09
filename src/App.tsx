import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main style={{ padding: '3rem', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <Routes>
          <Route path="/" element={<h2 style={{color: '#9d4edd'}}>Módulo To-Do List em construção...</h2>} />
          <Route path="/contador" element={<h2 style={{color: '#9d4edd'}}>Módulo Contador em construção...</h2>} />
          <Route path="/jogo" element={<h2 style={{color: '#9d4edd'}}>Módulo Jogo da Velha em construção...</h2>} />
          <Route path="/calculadora" element={<h2 style={{color: '#9d4edd'}}>Módulo Calculadora em construção...</h2>} />
          <Route path="/cep" element={<h2 style={{color: '#9d4edd'}}>Módulo Buscador CEP em construção...</h2>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;