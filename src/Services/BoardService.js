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

export function getBoard(){
    let board=[];
    for(let x=0;x<8;x++){
        let row=[];
        for(let y=0;y<8;y++){
            row.push({imageSrc:""})
        }
        board.push(row);
    }
    return board;
}
export function createInitialBoard(board){

    let white=6;
    let black=1;
    
    for(let j=0;j<8;j++){
        board[white][j].imageSrc=wPawn;
        board[black][j].imageSrc=bPawn;
    }

    let s=0;
    let e=7;
    white=7;
    black=0;
    while(s<e){
        if(s===0) {
            board[white][s].imageSrc=wRook;
            board[white][e].imageSrc=wRook;
            board[black][s].imageSrc=bRook;
            board[black][e].imageSrc=bRook;
        }
        if(s===1){
            board[white][s].imageSrc=wKnight;
            board[white][e].imageSrc=wKnight;
            board[black][s].imageSrc=bKnight;
            board[black][e].imageSrc=bKnight;
        }
        if(s===2){
            board[white][s].imageSrc=wBishop;
            board[white][e].imageSrc=wBishop;
            board[black][s].imageSrc=bBishop;
            board[black][e].imageSrc=bBishop;        
        }
        if(s===3){
            board[white][s].imageSrc=wQueen;
            board[white][e].imageSrc=wKing;
            board[black][s].imageSrc=bQueen;
            board[black][e].imageSrc=bKing; 
        }

        s++;
        e--;
    }
    return board;

}