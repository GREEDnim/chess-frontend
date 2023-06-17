import './Tile.css';
import Piece from '../Piece/Piece';
import { validMove } from '../../Services/PieceService';
function Tile({ x, y, piece, board, setBoard }) {
  function dragOver(e) {
    e.preventDefault();
  }

  function drop(e) {
    e.preventDefault();
    const pieceData = JSON.parse(e.dataTransfer.getData('text/plain'));
    
    if(validMove({x:pieceData.x,y:pieceData.y},{x,y},pieceData,board)){
      addToBoard(pieceData);
    }
    else console.log("invalid move");

  }

  function addToBoard(pieceData){
    const newBoard = [...board];
    //from position of drag
    newBoard[pieceData.x][pieceData.y] = {x:-1,y:-1,color:'invalid',type:'invalid',valid:false,src:null};
    // to position of drag, update x and y
    newBoard[x][y] = {...pieceData,x:x,y:y};
    setBoard(newBoard);
  }

  const className = `tile ${ (x+y)%2 === 0 ? 'white' : 'black'}`;

  return (
    <div className={className} data-x={x} data-y={y} key={`${x}-${y}`} onDragOver={dragOver} onDrop={drop}>
      {piece.valid && <Piece piece={piece} />}
    </div>
  );
}

export default Tile;
