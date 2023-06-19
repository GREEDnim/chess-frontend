import Board from "./components/Board/Board";
import Result from "./components/Result/Result";
import './App.css'
import { useState } from "react";

function App(){

  const[gameOver,setGameOver]=useState(false);
  return(
      <div className="container">
        <Board gameOver={gameOver} setGameOver={setGameOver} ></Board>
        {gameOver && <Result></Result>}
      </div>
  )
}

export default App;