import {useState} from 'react'
import Tile from '../Tile/Tile';
import './Board.css';
function Board(){

    function getBoard(){
        let board=[];
        for(let x=8;x>0;x--){
            for(let y=1;y<=8;y++){
                board.push({ x,y,imageSrc:null})
            }
        }
        return board;
    }
    const[board,setBoard]=useState(getBoard());

    return(
        <div className='board-container'>
            {board.map((ele)=><Tile x={ele.x} y={ele.y} imageSrc={ele.imageSrc}></Tile>)}
        </div>
    )
    

}
export default Board;