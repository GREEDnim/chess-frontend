import { getPossibleBishopMoves, validBishopMove } from "./BishopService";
import { getPossibleRookMoves, validRookMove } from "./RookService";

export function validQueenMove(from,to,board){
    return validRookMove(from,to,board) || validBishopMove(from,to,board);
}

export function isQueenAttackingKing(king,board){
    let oppQueenColor=board[king.x][king.y].color==0?1:0;
    //queen as rook
    for(let y=king.y-1;y>=0;y--){
        if(board[king.x][y].valid){
            if(board[king.x][y].type=='Q'  && board[king.x][y].color==oppQueenColor) return true;
            break;
        }
    }
    //right
    for(let y=king.y+1;y<8;y++){
        if(board[king.x][y].valid){
            if(board[king.x][y].type=='Q'  && board[king.x][y].color==oppQueenColor) return true;
            break;
        }
    }
    //top
    for(let x=king.x-1;x>=0;x--){
        if(board[x][king.y].valid){
            if(board[x][king.y].type=='Q' && board[x][king.y].color==oppQueenColor) return true;
            break; 
        }
    }
    //bottom
    for(let x=king.x+1;x<8;x++){
        if(board[x][king.y].valid){
            if(board[x][king.y].type=='Q' && board[x][king.y].color==oppQueenColor) return true;
            break; 
        }
    }

    //queen as bishop 
        // top left.
        for(let x=king.x-1,y=king.y-1;x>=0 && y>=0;x--,y--){
            if(board[x][y].valid){
                if(board[x][y].type=='Q' && board[x][y].color==oppQueenColor) return true;
                break;
            }
        }
        //top right
        for(let x=king.x-1,y=king.y+1;x>=0 && y<8 ; x--,y++){
            if(board[x][y].valid){
                if(board[x][y].type=='Q' && board[x][y].color==oppQueenColor) return true;
                break;
            }
        }
        //bottom left
        for(let x=king.x+1,y=king.y-1;x<8 && y>=0;x++,y--){
            if(board[x][y].valid){
                if(board[x][y].type=='Q' && board[x][y].color==oppQueenColor) return true;
                break;
            }
        }
        //bottom right
        for(let x=king.x+1,y=king.y+1;x<8 && y<8 ; x++,y++){
            if(board[x][y].valid){
                if(board[x][y].type=='Q'  && board[x][y].color==oppQueenColor) return true;
                break;
            }
        }
        return false;
}

export function getQueensPositions(color,board){
    let result=[];
    for(let x=0;x<board.length;x++){
        for(let y=0;y<board[x].length;y++){
            if(board[x][y].valid && board[x][y].color==color && board[x][y].type=='Q') result.push({x,y});
        }
    }
    // console.log(result);
    return result;
}

export function getPossibleQueenMoves(queen,color){
    // console.log(queen,color);
    return getPossibleRookMoves(queen,color).concat(getPossibleBishopMoves(queen,color));
}