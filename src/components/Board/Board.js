import {useState} from 'react'
import { getBoard,createInitialBoard } from '../../Services/BoardService';
import './Board.css';
import Tile from '../Tile/Tile';
function Board(){

    const[board,setBoard]=useState(createInitialBoard(getBoard()));
    console.log(board)
    return(
        <div className='board-container'>
            {board.map((row,x)=>{
                return row.map((ele,y)=><Tile x={x} y={y} piece={ele} board={board} setBoard={setBoard}/>)
            })}
        </div>
    )

}
export default Board;