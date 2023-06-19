import './Tile.css';
import Piece from '../Piece/Piece';
import { validMove } from '../../Services/Pieces/PieceService';
import { checkMate } from '../../Services/Board/CheckMate';
import { ChessPiece } from '../../Model/ChessPiece';
import { Game } from '../../Services/Board/Game';

function Tile({ x, y, board, setBoard , gameOver, setGameOver}) {
  
  function dragOver(e) {
    e.preventDefault();
  }

  function drop(e) {
    e.preventDefault();
    const from= JSON.parse(e.dataTransfer.getData('text/plain'));
    const to={x,y}
   
    if( board[from.x][from.y].color != Game.getTurn()) return;
    // console.log(from,to);
    if(validMove(from,to,board)){
      // console.log(validMove(from,to,board));
      addToBoard(from,to);
      // console.log(board)
      const opponentColor=board[to.x][to.y].color==0?1:0;
      // for every valid move made, check if the opp is checkmated.
      if(checkMate( opponentColor,board )) setGameOver(true);

      //changing the turn;
      Game.changeTurn();
    }
    // console.log(from,to);
  }

  function addToBoard(from,to){
    board[to.x][to.y]=board[from.x][from.y];
    board[from.x][from.y] = new ChessPiece('I',-1,null,false);
    setBoard([...board]);
  }

  const className = `tile ${ (x+y)%2 === 0 ? 'white' : 'black'}`;
  const piece=board[x][y];
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
