import {useState,useEffect} from 'react'
import { getBoard,createInitialBoard } from '../../Services/Board/BoardService';
import './Board.css';
import Tile from '../Tile/Tile';
import { validMove } from '../../Services/Pieces/PieceService';
import { checkMate } from '../../Services/Board/CheckMate';
import { ChessPiece } from '../../Model/ChessPiece';
import { Game } from '../../Services/Board/Game';
import io from 'socket.io-client';
const socket =io.connect('https://chess-backend-znna.onrender.com');

function Board({gameOver,setGameOver}){

    const[board,setBoard]=useState(createInitialBoard(getBoard()));
    useEffect(()=>{
        socket.on('receive-piece',(data)=>{
            validateAndAddToBoard(data.from,data.to);
        })
    },[socket])

    function validateAndAddToBoard(from,to){
        if( board[from.x][from.y].color != Game.getTurn()) return false;
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
          return true;
        }
      }

      function addToBoard(from,to){
        board[to.x][to.y]=board[from.x][from.y];
        board[from.x][from.y] = new ChessPiece('I',-1,null,false);
        setBoard([...board]);
      }
    // console.log(board);
    return(
        <div className='board-container'>
            {board.map((row,x)=>{
                return row.map((ele,y)=>
                <Tile 
                x={x} 
                y={y} 
                piece={board[x][y]}
                gameOver={gameOver} 
                validateAndAddToBoard={validateAndAddToBoard}
                  />)
            })}
        </div>
    )

}
export default Board;