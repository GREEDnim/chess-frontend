import bPawn from '../assets/bPawn.svg';
import bKing from '../assets/bKing.svg';
import bQueen from '../assets/bQueen.svg';
import bRook from '../assets/bRook.svg';
import bKnight from '../assets/bKnight.svg';
import bBishop from '../assets/bBishop.svg';
import wPawn from '../assets/wPawn.svg';
import wKing from '../assets/wKing.svg';
import wQueen from '../assets/wQueen.svg';
import wRook from '../assets/wRook.svg';
import wKnight from '../assets/wKnight.svg';
import wBishop from '../assets/wBishop.svg';
import { ChessPiece } from '../Model/Piece';
export function getBoard(){
    let board=[];
    for(let x=0;x<8;x++){
        let row=[];
        for(let y=0;y<8;y++){
            row.push({})
        }
        board.push(row);
    }
    return board;
}

export function createInitialBoard(board){
    // Piece(type,color,x,y,src)
   // 0=white,1=black

    let whiteRow=6;
    let blackRow=1;
   for(let col=0;col<8;col++){
    board[whiteRow][col]=new ChessPiece('P',0,whiteRow,col,wPawn)
    board[blackRow][col]=new ChessPiece('P',1,blackRow,col,bPawn)
}

    let s=0;
    let e=7;
    whiteRow=7;
    blackRow=0;
    while(s<e)
    {
        if(s===0) {
            board[whiteRow][s]=new ChessPiece('R',0,whiteRow,s,wRook)
            board[whiteRow][e]=new ChessPiece('R',0,whiteRow,e,wRook)
            board[blackRow][s]=new ChessPiece('R',1,blackRow,s,bRook)
            board[blackRow][e]=new ChessPiece('R',1,blackRow,s,bRook)
        }
        if(s===1){
            board[whiteRow][s]=new ChessPiece('K',0,whiteRow,s,wKnight)
            board[whiteRow][e]=new ChessPiece('K',0,whiteRow,e,wKnight)
            board[blackRow][s]=new ChessPiece('K',1,blackRow,s,bKnight)
            board[blackRow][e]=new ChessPiece('K',1,blackRow,s,bKnight)
        }
        if(s===2){
            board[whiteRow][s]=new ChessPiece('B',0,whiteRow,s,wBishop)
            board[whiteRow][e]=new ChessPiece('B',0,whiteRow,e,wBishop)
            board[blackRow][s]=new ChessPiece('B',1,blackRow,s,bBishop)
            board[blackRow][e]=new ChessPiece('B',1,blackRow,s,bBishop)        
        }
        if(s===3){
            board[whiteRow][s]=new ChessPiece('Q',0,whiteRow,s,wQueen)
            board[whiteRow][e]=new ChessPiece('K',0,whiteRow,e,wKing)
            board[blackRow][s]=new ChessPiece('Q',1,blackRow,s,bQueen)
            board[blackRow][e]=new ChessPiece('K',1,blackRow,s,bKing)     
        }

        s++;
        e--;
    }

    return board;
}
   