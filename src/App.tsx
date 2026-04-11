import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TodoList from './pages/TodoList';
import Contador from './pages/Contador'; // <-- Adicione o import do Contador
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main style={{ padding: '3rem', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <Routes>
          <Route path="/" element={<TodoList />} />
          {/* Atualize a linha abaixo */}
          <Route path="/contador" element={<Contador />} />
          <Route path="/jogo" element={<h2 style={{color: '#9d4edd'}}>Módulo Jogo da Velha em construção...</h2>} />
          <Route path="/calculadora" element={<h2 style={{color: '#9d4edd'}}>Módulo Calculadora em construção...</h2>} />
          <Route path="/cep" element={<h2 style={{color: '#9d4edd'}}>Módulo Buscador CEP em construção...</h2>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;