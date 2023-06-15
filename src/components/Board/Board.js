import {useState} from 'react'
import { getBoard,createInitialBoard } from '../../Services/BoardService';
import './Board.css';
import Tile from '../Tile/Tile';
function Board(){

    const[board,setBoard]=useState(createInitialBoard(getBoard()));

    return(
        <div className='board-container'>
            {board.map((row,x)=>{
                return row.map((ele,y)=><Tile x={x} y={y} imageSrc={ele.imageSrc}/>)
            })}
        </div>
    )

}
export default Board;