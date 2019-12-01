import React, { useState } from "react";
import "./TicTacToe.css";

function Square({ value, onClick }) {
  return (
    <button className='square' onClick={onClick}>
      {value}
    </button>
  );
}

function TicTacToe(props) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const winner = calculateWinner(squares);
  const userSymbol = "X";
  const computerSymbol = "O";

  function getStatus() {
    if (winner) {
      return winner === "X" ? "Du hast gewonnen!" : "Es ist ja nur ein Spiel!";
    } else if (isBoardFull(squares)) {
      return "Ein solidarisches Remis!";
    } else {
      return `Um zu spielen, setze dein Kreuz in eines der Kästchen, indem du dort hinein klickst. Danach ist ${props.avatar} dran. Um zu gewinnen, musst du drei Kreuze in einer waagerechten, senkrechten oder diagonalen Reihe platzieren.`;
    }
  }

  function renderSquare(i) {
    return (
      <Square
        value={squares[i]}
        onClick={() => {
          if (squares[i] != null || winner != null) {
            return;
          }
          const nextSquares = squares.slice();
          nextSquares[i] = userSymbol;
          setSquares(nextSquares);

          if (!calculateWinner(nextSquares)) {
            setTimeout(() => {
              const generatedSquares = nextSquares.slice();
              const generatedSquare = setGeneratedSquare(generatedSquares);
              if (generatedSquare != null) {
                generatedSquares[generatedSquare] = computerSymbol;
                setSquares(generatedSquares);
              }
            }, 300);
          }
        }}
      />
    );
  }

  return (
    <div className='game'>
      <div className='game-info'>
        <p>{getStatus()}</p>
      </div>
      <div className='game-board'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

function setGeneratedSquare(squares) {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] == null) {
      return i;
    }
  }
  return null;
}

function calculateWinner(squares) {
  const possibleLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  // go over all possibly winning lines and check if they consist of only X's/only O's
  for (let i = 0; i < possibleLines.length; i++) {
    const [a, b, c] = possibleLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function isBoardFull(squares) {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] == null) {
      return false;
    }
  }
  return true;
}

export default TicTacToe;
