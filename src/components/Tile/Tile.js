import './Tile.css'
import Piece from '../Piece/Piece';
function Tile({x,y,piece,board,setBoard}){

  function dragOver(e) {
    console.log('dragover')
    e.preventDefault();
  }
  function drop(e){
    console.log('drop')
    e.preventDefault();
    var data = e.dataTransfer.getData("piece/text");
    console.log(data);
  }
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
   

    return <div className={className} data-x={x} data-y={y} key={`${x}-${y}`} onDragOver={dragOver} onDrop={drop} >
        {piece.src && <Piece piece={piece} ></Piece>}
    </div>
}  
export default Tile;