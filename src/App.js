import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

var aCoordinates = [
  "A8", "B8", "C8", "D8", "E8", "F8", "G8", "H8",
  "A7", "B7", "C7", "D7", "E7", "F7", "G7", "H7",
  "A6", "B6", "C6", "D6", "E6", "F6", "G6", "H6",
  "A5", "B5", "C5", "D5", "E5", "F5", "G5", "H5",
  "A4", "B4", "C4", "D4", "E4", "F4", "G4", "H4",
  "A3", "B3", "C3", "D3", "E3", "F3", "G3", "H3",
  "A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2",
  "A1", "B1", "C1", "D1", "E1", "F1", "G1", "H1"
];

var aColors = [
  "black", "white", "black", "white", "black", "white", "black", "white",
  "white", "black", "white", "black", "white", "black", "white", "black",
  "black", "white", "black", "white", "black", "white", "black", "white",
  "white", "black", "white", "black", "white", "black", "white", "black",
  "black", "white", "black", "white", "black", "white", "black", "white",
  "white", "black", "white", "black", "white", "black", "white", "black",
  "black", "white", "black", "white", "black", "white", "black", "white",
  "white", "black", "white", "black", "white", "black", "white", "black"
];

function App() {
  var iInitialPosition = Math.floor(Math.random() * 64);
  const [position, setPosition] = useState(iInitialPosition);
  const [coordniate, setCoordinate] = useState(aCoordinates[iInitialPosition]);
  const [state, setState] = useState(0);

  const getRandomCoordinate = function() {
    var iPosition = Math.floor(Math.random() * 64);
    setPosition(iPosition)
    setCoordinate(aCoordinates[iPosition])
    setState(0);
  }

  const checkBlack = function() {
    setState(aColors[position] === "black" ? 1 : 2);
  }

  const checkWhite = function() {
    setState(aColors[position] === "white" ? 1 : 2);
  }

  return (
    <div>
      <div className="Cell">{coordniate}</div>
      <div 
        className={state === 1  ? "CellCorrect" : "Hide"} 
        onClick={() => getRandomCoordinate()}>✓</div>
      <div 
        className={state === 2  ? "CellNotCorrect" : "Hide"} 
        onClick={() => getRandomCoordinate()}>✕</div>
      <div className="ButtonRow">
        <div 
          className="ButtonBlack" 
          onClick={() => checkBlack()}>Black</div>
        <div 
          className="ButtonWhite" 
          onClick={() => checkWhite()}>White</div>
      </div>
    </div>
  );
}

export default App;
