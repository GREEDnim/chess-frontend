import './Tile.css';
import Piece from '../Piece/Piece';


import io from 'socket.io-client';
const socket =io.connect('http://localhost:3001');


function sendMoveToOpponent(from,to){
socket.emit("send-piece",{from,to})
}

function Tile({ x, y,piece, validateAndAddToBoard, gameOver}) {
  
  function dragOver(e) {
    e.preventDefault();
  }

  function drop(e) {
    e.preventDefault();
    const from= JSON.parse(e.dataTransfer.getData('text/plain'));
    const to={x,y}
    let valid=validateAndAddToBoard(from,to,true);
    //im only sending the from and to ;
    if(valid) sendMoveToOpponent(from,to);
  }
  const className = `tile ${ (x+y)%2 === 0 ? 'white' : 'black'}`;
  return (
    <div className={className} data-x={x} data-y={y} key={`${x}-${y}`} onDragOver={dragOver} onDrop={drop}>
      {piece.valid && 
      <Piece 
      src={piece.src} 
      coords={{x,y}} 
      gameOver={gameOver}  />}
    </div>
  )
}

export default Tile;
