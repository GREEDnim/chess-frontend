import bPawn from '../../assets/bPawn.svg';
import bKing from '../../assets/bKing.svg';
import bQueen from '../../assets/bQueen.svg';
import bRook from '../../assets/bRook.svg';
import bKnight from '../../assets/bKnight.svg';
import bBishop from '../../assets/bBishop.svg';
import wPawn from '../../assets/wPawn.svg';
import wKing from '../../assets/wKing.svg';
import wQueen from '../../assets/wQueen.svg';
import wRook from '../../assets/wRook.svg';
import wKnight from '../../assets/wKnight.svg';
import wBishop from '../../assets/wBishop.svg';


import { ChessPiece } from '../../Model/ChessPiece';

export function getBoard(){
    let board=[];
    for(let x=0;x<8;x++){
        let row=[];
        for(let y=0;y<8;y++){
            row.push(new ChessPiece('I',-1,null, false))
        }
        board.push(row);
    }
    return board;
}

export function createInitialBoard(board){
    // Piece(type,color,src,valid)
   // 0=white,1=black
    let whiteRow=6;
    let blackRow=1;
   for(let col=0;col<8;col++){
        board[whiteRow][col]=new ChessPiece('P',0,wPawn,true)
        board[blackRow][col]=new ChessPiece('P',1,bPawn,true)
    }
    let s=0;
    let e=7;
    whiteRow=7;
    blackRow=0;
    while(s<e)
    {
        if(s===0) {
            board[whiteRow][s]=new ChessPiece('R',0,wRook,true)
            board[whiteRow][e]=new ChessPiece('R',0,wRook,true)
            board[blackRow][s]=new ChessPiece('R',1,bRook,true)
            board[blackRow][e]=new ChessPiece('R',1,bRook,true)
        }
        if(s===1){
            board[whiteRow][s]=new ChessPiece('N',0,wKnight,true)
            board[whiteRow][e]=new ChessPiece('N',0,wKnight,true)
            board[blackRow][s]=new ChessPiece('N',1,bKnight,true)
            board[blackRow][e]=new ChessPiece('N',1,bKnight,true)
        }
        if(s===2){
            board[whiteRow][s]=new ChessPiece('B',0,wBishop,true)
            board[whiteRow][e]=new ChessPiece('B',0,wBishop,true)
            board[blackRow][s]=new ChessPiece('B',1,bBishop,true)
            board[blackRow][e]=new ChessPiece('B',1,bBishop,true)        
        }
        if(s===3){
            board[whiteRow][s]=new ChessPiece('Q',0,wQueen,true)
            board[whiteRow][e]=new ChessPiece('K',0,wKing,true)
            board[blackRow][s]=new ChessPiece('Q',1,bQueen,true)
            board[blackRow][e]=new ChessPiece('K',1,bKing,true)
        }
        s++;
        e--;
    }
    return board;
}

   