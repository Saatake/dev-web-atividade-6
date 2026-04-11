import { useState } from 'react';
import './JogoDaVelha.css';

// tipagem para valores iniciais
type Player = 'X' | 'O' | null;

function JogoDaVelha() {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  // função para verificar vencedor
  const calculateWinner = (squares: Player[]) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // linha horizontas
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Linhas verticaais
      [0, 4, 8], [2, 4, 6]             // diagonais
    ];
    
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every(square => square !== null);

  const handleClick = (index: number) => {
    // ignora o clique se o quadrado já estiver preenchido ou se o jogo acabou
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="tic-tac-toe-container">
      <h2>Jogo da Velha</h2>
      
      <div className="status-message">
        {winner ? (
          <span style={{ color: winner === 'X' ? '#00f0ff' : '#ff00ff' }}>
            Vitória do {winner}!
          </span>
        ) : isDraw ? (
          <span style={{ color: '#ffb703' }}>Empate!</span>
        ) : (
          <span>Turno: <strong style={{ color: xIsNext ? '#00f0ff' : '#ff00ff' }}>{xIsNext ? 'X' : 'O'}</strong></span>
        )}
      </div>

      <div className="board">
        {board.map((square, index) => (
          <button 
            key={index} 
            className={`square ${square === 'X' ? 'x' : square === 'O' ? 'o' : ''}`}
            onClick={() => handleClick(index)}
          >
            {square}
          </button>
        ))}
      </div>

      <button className="btn-restart" onClick={resetGame}>Reiniciar</button>
    </div>
  );
}

export default JogoDaVelha;