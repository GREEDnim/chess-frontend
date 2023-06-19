import { ChessPiece } from "../../Model/ChessPiece";
import { getKingPosition, isKingAttackingKing, validKingMove } from "./KingService";
import { isKnightAttackingKing, validKnightMove } from "./KnightService";
import { isPawnAttackingKing, validPawnMove } from "./PawnService";
import { isBishopAttackingKing, validBishopMove } from "./BishopService";
import { isQueenAttackingKing, validQueenMove } from "./QueenService";
import { isRookAttackingKing, validRookMove } from "./RookService";

export function isCheck(color,board){
    // finding kings position.
    const king=getKingPosition(color,board)
    // console.log(king,board);
    // check if opponents pieces are attacking color's king.
   let check=false;

   check=check||isPawnAttackingKing(king,board);
//    console.log('p',check)
   check=check||isKnightAttackingKing(king,board);
//    console.log('n',check)
   check=check||isBishopAttackingKing(king,board);
//    console.log('b',check)
   check=check||isRookAttackingKing(king,board);
//    console.log('r',check)
   check=check||isQueenAttackingKing(king,board);
//    console.log('k',check)
   check=check||isKingAttackingKing(king,board);
//    console.log('q',check)
    return check;

}
function isCheckIfMoved(from,to,board){
    const fromPiece=board[from.x][from.y];
    const toPiece=board[to.x][to.y];
    changeBoard(from,to,new ChessPiece('I',-1,null,false),fromPiece,board);
    let check=isCheck(fromPiece.color,board);
    changeBoard(from,to,fromPiece,toPiece,board);
    return check;
}

export function validMove(from,to,board){

    // console.log(from,to,board)
    // console.log('called valid move');
    // console.log(from,to);
    let piece=board[from.x][from.y];
    switch (piece.type) {
        case 'P': {
            let x= validPawnMove(from,to,board) && !isCheckIfMoved(from,to,board);
            // console.log(x);
            return x;
        }
        case 'N': {
            return validKnightMove(from,to,board)  && !isCheckIfMoved(from,to,board);
        }
        case 'R': {
            return validRookMove(from,to,board) && !isCheckIfMoved(from,to,board);
        }
        case 'B': {
            return validBishopMove(from,to,board) && !isCheckIfMoved(from,to,board);
        }
        case 'Q': {
            return validQueenMove(from,to,board)  && !isCheckIfMoved(from,to,board);
        }
        case 'K': {
            return validKingMove(from,to,board)  && !isCheckIfMoved(from,to,board);
        }
        default: {
          return false;
        }
    }
      
}
export function changeBoard(fromPos,toPos,fromVal,toVal,board){
    board[fromPos.x][fromPos.y]=fromVal;
    board[toPos.x][toPos.y]=toVal;
}


