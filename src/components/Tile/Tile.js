import './Tile.css';
import Piece from '../Piece/Piece';

function Tile({ x, y, piece, board, setBoard }) {
  function dragOver(e) {
    e.preventDefault();
  }

  function drop(e) {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData('text/plain'));
    const newBoard = [...board];
    newBoard[data.x][data.y] = {src:null};
    newBoard[x][y] = {...data};
    setBoard(newBoard);
  }

  const className = `tile ${ (x+y)%2 === 0 ? 'white' : 'black'}`;

  return (
    <div className={className} data-x={x} data-y={y} key={`${x}-${y}`} onDragOver={dragOver} onDrop={drop}>
      {piece.src && <Piece piece={piece} />}
    </div>
  );
}

export default Tile;
