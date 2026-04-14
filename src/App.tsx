import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TodoList from './pages/TodoList';
import Contador from './pages/Contador';
import JogoDaVelha from './pages/JogoDaVelha';
import Calculadora from './pages/Calculadora';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main style={{ padding: '3rem', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/contador" element={<Contador />} />
          <Route path="/jogo" element={<JogoDaVelha />} />
          <Route path="/calculadora" element= {<Calculadora />} />
          <Route path="/cep" element={<h2 style={{color: '#9d4edd'}}>Módulo Buscador CEP em construção...</h2>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;