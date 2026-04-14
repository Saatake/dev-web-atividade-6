import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TodoList from './pages/TodoList';
import Contador from './pages/Contador';
import JogoDaVelha from './pages/JogoDaVelha';
import Calculadora from './pages/Calculadora';
import BuscadorCep from './pages/BuscadorCep';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/contador" element={<Contador />} />
          <Route path="/jogo" element={<JogoDaVelha />} />
          <Route path="/calculadora" element= {<Calculadora />} />
          <Route path="/cep" element={<BuscadorCep />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;