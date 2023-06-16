import './Tile.css'
import Piece from '../Piece/Piece';
import { useDrop } from 'react-dnd';
function Tile({x,y,piece,board,setBoard}){

  function addToBoard(piece) {
    board=JSON.parse(JSON.stringify(board))
    board[piece.x][piece.y]={};
    board[x][y]=piece;
    piece.x=x;
    piece.y=y;
    board=JSON.parse(JSON.stringify(board))
    console.log([...board]);
    setBoard([...board])
  }

    const className=`tile ${ (x+y)%2===0? 'white' : 'black'}`;
    const [{isOver},drop]=useDrop(()=>({
      accept:'piece',
      drop:(item) =>{addToBoard(item)},
      collect:(monitor)=>({
        isOver:monitor.isOver(),
      })

    }));


    return <div className={className} data-x={x} data-y={y} key={`${x}-${y}`}  ref={drop}>
        {piece.src && <Piece piece={piece} ></Piece>}
    </div>
}  
export default Tile;