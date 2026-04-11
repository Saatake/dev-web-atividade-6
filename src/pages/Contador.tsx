import { useState } from 'react';
import './Contador.css';

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h2>Contador de Cliques</h2>
      
      <div className="display-panel">
        <h1>{count}</h1>
      </div>

      <div className="controls">
        <button className="btn-control btn-minus" onClick={() => setCount(count - 1)}>
          -1
        </button>
        <button className="btn-control btn-reset" onClick={() => setCount(0)}>
          Resetar
        </button>
        <button className="btn-control btn-plus" onClick={() => setCount(count + 1)}>
          +1
        </button>
      </div>
    </div>
  );
}

export default Contador;