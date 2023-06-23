import Board from "./Board/Board";
import Result from "./Result/Result";
import {createInitialBoard,getBoard} from '../../Services/Board/BoardService'
import './ChessGame.css'
import Turn from "./Turn/Turn";
import { useState } from "react";


function ChessGame({socket,color,roomId}){
  const[board,setBoard]=useState(createInitialBoard(getBoard()));
  function is_touch_enabled() {
    return ( 'ontouchstart' in window ) || ( navigator.maxTouchPoints > 0 ) || ( navigator.msMaxTouchPoints > 0 );
  }
  const[gameOver,setGameOver]=useState(false);
  const boardGame =
      <div className="game-container">
        <Board gameOver={gameOver} setGameOver={setGameOver} socket={socket} color={color} roomId={roomId} board={board} setBoard={setBoard}  ></Board>
        {color==undefined?'':gameOver ? <Result></Result> : <Turn board={board}></Turn>}
      </div>;

  return(
      is_touch_enabled()?<h1 className='mobile'>OPEN THE APP ON A NON TOUCH SCREEN DEVICE</h1>:boardGame
  )
}
export default ChessGame;