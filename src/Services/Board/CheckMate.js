
//export function opensCheck(color,board)

import { getBishopsPositions, getPossibleBishopMoves } from "../Pieces/BishopService";
import { getKingPosition, getPossibleKingMoves } from "../Pieces/KingService";
import { getKnightsPositions, getPossibleKnightMoves } from "../Pieces/KnightService";
import { getPawnsPositions, getPossiblePawnMoves } from "../Pieces/PawnService";
import { isCheck, validMove } from "../Pieces/PieceService";
import { getPossibleQueenMoves, getQueensPositions } from "../Pieces/QueenService";
import { getPossibleRookMoves, getRooksPositions } from "../Pieces/RookService";

//checkmate.
// also check if currently in check , else no checkmate.
// for every piece, get an array of its possible valid move position, (not confirm valid , but has all confirm valids).
// call validmove for every piece and every move
// if any one returns true, then no checkmate.

export function checkMate(color,board){

    console.log('called checkmate',color)

    if(!isCheck(color,board)) return false; 

    console.log('in check yay')
    //pawns
    let pawns=getPawnsPositions(color,board);
    for(let i=0;i<pawns.length;i++){
        let from=pawns[i];
        let vm=getPossiblePawnMoves(from,color);
        for(let j=0;j<vm.length;j++){
            let to=vm[j];
            if(validMove(from,to,board)) return false;
        }
    }
    console.log('pawn cant do shit',pawns)
    // rooks
    let rooks=getRooksPositions(color,board);
    for(let i=0;i<rooks.length;i++){
        let from=rooks[i];
        let vm=getPossibleRookMoves(from,color);
        for(let j=0;j<vm.length;j++){
            let to=vm[j];
            if(validMove(from,to,board)) return false;
        }
    }
    console.log('rook cant do shit',rooks)
    //knights
    let knights=getKnightsPositions(color,board);
    for(let i=0;i<knights.length;i++){
        let from=knights[i];
        let vm=getPossibleKnightMoves(from,color);
        for(let j=0;j<vm.length;j++){
            let to=vm[j];
            if(validMove(from,to,board)) return false;
        }
    }
    console.log('knights cant do shit',knights)
    //bishops
    let bishops=getBishopsPositions(color,board);
    for(let i=0;i<bishops.length;i++){
        let from=bishops[i];
        let vm=getPossibleBishopMoves(color,board);
        for(let j=0;j<vm.length;j++){
            let to=vm[j];
            if(validMove(from,to,board)) return false;
        }
    }
    console.log('bishop cant do shit',bishops)
    //queen
    let queens=getQueensPositions(color,board);
    // console.log(queens)
    for(let i=0;i<queens.length;i++){
        let from=queens[i];
        let vm=getPossibleQueenMoves(from,color);
        for(let j=0;j<vm.length;j++){
            let to=vm[j];
            if(validMove(from,to,board)) return false;
        }
    }
    console.log('queen cant do shit',queens)
        
    //king
    let from=getKingPosition(color,board);
    let vm=getPossibleKingMoves(from,color);
        for(let j=0;j<vm.length;j++){
            let to=vm[j];
            if(validMove(from,to,board)) return false;
        }
        console.log('king cant do shit')
    return true;
}







