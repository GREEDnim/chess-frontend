import Board from "./Board/Board";
import Result from "./Result/Result";
import './ChessGame.css'
import { useState } from "react";


function ChessGame({socket,color,roomId}){
  function is_touch_enabled() {
    return ( 'ontouchstart' in window ) || ( navigator.maxTouchPoints > 0 ) || ( navigator.msMaxTouchPoints > 0 );
  }
  const[gameOver,setGameOver]=useState(false);
  const boardGame =
      <div className="game-container">
        <Board gameOver={gameOver} setGameOver={setGameOver} socket={socket} color={color} roomId={roomId}  ></Board>
        {gameOver && <Result></Result>}
      </div>;

  return(
      is_touch_enabled()?<h1 className='mobile'>OPEN THE APP ON A NON TOUCH SCREEN DEVICE</h1>:boardGame
  )
}
export default ChessGame;