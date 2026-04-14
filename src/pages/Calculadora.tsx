import { useState } from 'react';
import './Calculadora.css';

function Calculadora() {
  const [currentValue, setCurrentValue] = useState('0');
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operator, setOperator] = useState<string | null>(null);

  const handleNumber = (num: string) => {
    // limita a 12 caracteres pra nao quebrar o layout
    if (currentValue.length >= 12) return; 

    // barra a entrada de dois pontos na mesma conta
    if (num === '.' && currentValue.includes('.')) return;

    if (currentValue === '0' && num !== '.') {
      setCurrentValue(num);
    } else {
      setCurrentValue(currentValue + num);
    }
  };

  const handleOperator = (op: string) => {
    setOperator(op);
    setPreviousValue(currentValue);
    setCurrentValue('0');
  };

  const calculate = () => {
    // aborta se faltar algum dado pra conta
    if (!previousValue || !operator) return;

    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);
    let result = 0;

    switch (operator) {
      case '+': result = prev + current; break;
      case '-': result = prev - current; break;
      case '*': result = prev * current; break;
      case '/': result = prev / current; break;
    }

    // converte pra string e corta o tamanho
    setCurrentValue(String(result).slice(0, 12));
    setPreviousValue(null);
    setOperator(null);
  };

  const clear = () => {
    setCurrentValue('0');
    setPreviousValue(null);
    setOperator(null);
  };

  return (
    <div className="calculator-container">
      <h2>Calculadora</h2>
      
      <div className="display">
        <div className="display-prev">
          {previousValue} {operator}
        </div>
        <div className="display-current">{currentValue}</div>
      </div>

      <div className="keypad">
        <button className="btn-calc btn-clear" onClick={clear}>C</button>
        <button className="btn-calc btn-op" onClick={() => handleOperator('/')}>/</button>
        <button className="btn-calc btn-op" onClick={() => handleOperator('*')}>*</button>

        <button className="btn-calc" onClick={() => handleNumber('7')}>7</button>
        <button className="btn-calc" onClick={() => handleNumber('8')}>8</button>
        <button className="btn-calc" onClick={() => handleNumber('9')}>9</button>
        <button className="btn-calc btn-op" onClick={() => handleOperator('-')}>-</button>

        <button className="btn-calc" onClick={() => handleNumber('4')}>4</button>
        <button className="btn-calc" onClick={() => handleNumber('5')}>5</button>
        <button className="btn-calc" onClick={() => handleNumber('6')}>6</button>
        <button className="btn-calc btn-op" onClick={() => handleOperator('+')}>+</button>

        <button className="btn-calc" onClick={() => handleNumber('1')}>1</button>
        <button className="btn-calc" onClick={() => handleNumber('2')}>2</button>
        <button className="btn-calc" onClick={() => handleNumber('3')}>3</button>
        
        {/* botao igual alto que ocupa a linha do 123 e do 0. */}
        <button className="btn-calc btn-equal" onClick={calculate}>=</button>
        
        <button className="btn-calc btn-zero" onClick={() => handleNumber('0')}>0</button>
        <button className="btn-calc" onClick={() => handleNumber('.')}>.</button>
      </div>
    </div>
  );
}

export default Calculadora;