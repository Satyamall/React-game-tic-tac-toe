
import './App.css';
import { useState } from 'react';

function App(props) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [next, setNext] = useState(true);
  const winner = calculateWinner(board);
  
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  const style = {
    background: "lightblue",
    border: "2px solid darkblue",
    fontSize: "30px",
    fontWeight: "800",
    cursor: "pointer",
    outline: "none",
  };
  
  const Square = ({ value, onClick }) => (
    <button style={style} onClick={onClick}>
      {value}
    </button>
  );
  const styles = {
    border: "4px solid darkblue",
    borderRadius: "10px",
    width: "250px",
    height: "250px",
    margin: "0 auto",
    display: "grid",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
  };
  const Board = ({ squares, onClick }) => (
    <div style={styles}>
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );

  const handleClick = (i) => {
    const boardCopy = [...board];
    if(boardCopy[i])
    {
      alert("Please Click on Empty box")
    }
    if (winner || boardCopy[i])
    {
      return;
    }
    boardCopy[i] = next ? "X" : "O";
    setBoard(boardCopy);
    setNext(!next);
  };

  const handleReset=()=>{
    setBoard(Array(9).fill(null));
  }

  return (
    <div className="App">
      <Board squares={board} onClick={handleClick} />
      <div className="bottom">
        <p>
          {winner ? "Winner: " + winner : "Next Player: " + (next ? "X" : "O")}
        </p>
      </div>
      <button onClick={handleReset} className="reset">START NEW GAME</button>
    </div>
  )

}
export default App;

