import Board from "./components/Board/Board";
import Result from "./components/Result/Result";
import './App.css'
import { useState } from "react";

function App(){
  function is_touch_enabled() {
    return ( 'ontouchstart' in window ) || ( navigator.maxTouchPoints > 0 ) || ( navigator.msMaxTouchPoints > 0 );
  }
  const[gameOver,setGameOver]=useState(false);
  const boardGame =
      <div className="container">
        <Board gameOver={gameOver} setGameOver={setGameOver} ></Board>
        {gameOver && <Result></Result>}
      </div>;

  return(
      is_touch_enabled()?<h1 className='mobile'>OPEN THE APP ON A NON TOUCH SCREEN DEVICE</h1>:boardGame
  )
}
export default App;