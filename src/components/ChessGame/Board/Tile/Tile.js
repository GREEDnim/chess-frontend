import './Tile.css';
import Piece from './Piece/Piece'


function sendMoveToOpponent(from,to,socket,roomId){
socket.emit("send-piece",{from,to},roomId);
}

function Tile({ x, y,piece, validateAndAddToBoard, gameOver, socket,color, roomId }) {
  
  function dragOver(e) {
    e.preventDefault();
  }

  function drop(e) {
    e.preventDefault();
    const from= JSON.parse(e.dataTransfer.getData('text/plain'));
    const to={x,y}
    let valid=validateAndAddToBoard(from,to,true);
    //im only sending the from and to ;
    if(valid) sendMoveToOpponent(from,to,socket,roomId);
  }
  const className = `tile ${ (x+y)%2 === 0 ? 'white' : 'black'}`;
  console.log(x,y);
  return (
    <div className={className} data-x={x} data-y={y} key={`${x}-${y}`} onDragOver={dragOver} onDrop={drop}>
      {piece.valid && 
      <Piece 
      src={piece.src} 
      coords={{x,y}} 
      gameOver={gameOver}   />}
    </div>
  )
}

export default Tile;
