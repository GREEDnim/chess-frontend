import {useState,useEffect} from 'react'
import { getBoard,createInitialBoard } from '../../../Services/Board/BoardService'
import './Board.css';
import Tile from './Tile/Tile';
import { validMove } from '../../../Services/Pieces/PieceService';
import { checkMate } from '../../../Services/Board/CheckMate';
import { ChessPiece } from '../../../Model/ChessPiece';
import { Game } from '../../../Services/Board/Game';


function Board({gameOver,setGameOver,socket,color,roomId}){

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

      function createAllTiles(color){
            let tiles=[];
            if(color==0){
              for(let x=0;x<=7;x++){
                for(let y=0;y<=7;y++){
                  tiles.push( <Tile  x={x}  y={y}  piece={board[x][y]} gameOver={gameOver}  validateAndAddToBoard={validateAndAddToBoard} socket={socket} color={color}  roomId={roomId} />)
                }
              }
            }
            else {
              for(let x=7;x>=0;x--){
                for(let y=0;y<=7;y++){
                  tiles.push( <Tile  x={x}  y={y}  piece={board[x][y]} gameOver={gameOver}  validateAndAddToBoard={validateAndAddToBoard} socket={socket} color={color} roomId={roomId} />)
                }
              }
            }
            return tiles;
      }
    console.log(board);
    return(
        <div className='board-container'>
            {createAllTiles(color)}
        </div>
    )

}
export default Board;