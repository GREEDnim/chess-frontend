import {useState} from 'react'
import { getBoard,createInitialBoard } from '../../Services/Board/BoardService';
import './Board.css';
import Tile from '../Tile/Tile';
function Board({gameOver,setGameOver}){

    const[board,setBoard]=useState(createInitialBoard(getBoard()));
    // console.log(board);
    return(
        <div className='board-container'>
            {board.map((row,x)=>{
                return row.map((ele,y)=>
                <Tile 
                x={x} 
                y={y} 
                board={board} 
                setBoard={setBoard} 
                gameOver={gameOver} 
                setGameOver={setGameOver}
                  />)
            })}
        </div>
    )

}
export default Board;