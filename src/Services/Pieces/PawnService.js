export function validPawnMove(from,to,board){
    const piece=board[from.x][from.y];
    // checking how many rows and moved;
    let rowsMoved=Math.abs(from.x-to.x);
    let colsMoved=Math.abs(from.y-to.y);
    //checking if pawn move in opposite direction or same pos
    if(piece.color==0 && to.x>=from.x) return false;
    if(piece.color==1 && to.x<=from.x) return false;
    // checking if moved more than two rows and  one cols, and if moved down
    if(rowsMoved>2 || colsMoved>1 ) return false;
    //checking if two rows moved, then they are at starting row and no piece at destination 
    if(rowsMoved===2){
        // not at the initial position
        if(piece.color==0 && from.x!=6 ) return false;
        if(piece.color==1 && from.x!=1) return false;
        // if column change when two jump, already a piece is place, 
        if(colsMoved==1 || board[to.x][to.y].valid ) return false;
        //skipping piece 
        if( board[5][to.y].valid ) return false;
        if(board[2][to.y].valid ) return false;
    }
    //if moved 1 row
    if(rowsMoved==1){
        // if moved one column
        if(colsMoved==1){
            //it doesnt have a piece
            if(!board[to.x][to.y].valid) return false;
            // it has a piece of same color
            if(board[to.x][to.y].color==piece.color) return false;
        }
        //moved straight and has a piece
        else if(board[to.x][to.y].valid) return false;
    }
    return true;
}
export function 
isPawnAttackingKing(king,board){

  // console.log(king,board)
    const kingPiece=board[king.x][king.y];

    let oppPawnColor=kingPiece.color==0?1:0;
    let p=[];
    //possible positions of black pawn attack king is above the king.
    if(oppPawnColor==1) p=[[-1,-1],[-1,1]];
    //possible positions of white pawn attack king is below the king.
    else p=[[1,-1],[1,1]];
    
    for(let i=0;i<p.length;i++){
        //possible opponet pawns position
        let pos={x:king.x+p[i][0],y:king.y+p[i][1]};

        if(pos.x<0 || pos.y<0 || pos.x>7 || pos.y>7) continue;

        if(board[pos.x][pos.y].valid && board[pos.x][pos.y].type=='P' ){
            if(board[pos.x][pos.y].color==oppPawnColor) return true;
        }
    } 
    return false;
}

export function getPawnsPositions(color,board){
    let result=[];
    for(let x=0;x<board.length;x++){
        for(let y=0;y<board[x].length;y++){
            if(board[x][y].valid && board[x][y].color==color && board[x][y].type=='P') result.push({x,y});
        }
    }
    return result;
}

export function getPossiblePawnMoves(pawn, color) {
    let result = [];
    if (color == 0) {
      if (pawn.x == 6) {
        result.push({ x: pawn.x - 2, y: pawn.y });
      } else {
        if (pawn.x - 1 > 0) {
          result.push({ x: pawn.x - 1, y: pawn.y });
          if (pawn.y - 1 > 0) result.push({ x: pawn.x - 1, y: pawn.y - 1 });
          if (pawn.y + 1 < 8) result.push({ x: pawn.x - 1, y: pawn.y + 1 });
        }
      }
    }
    if (color === 1) {
      if (pawn.x === 1) {
        result.push({ x: pawn.x + 2, y: pawn.y });
      } else {
        if (pawn.x + 1 < 8) {
          result.push({ x: pawn.x + 1, y: pawn.y });
          if (pawn.y - 1 > 0) result.push({ x: pawn.x + 1, y: pawn.y - 1 });
          if (pawn.y + 1 < 8) result.push({ x: pawn.x + 1, y: pawn.y + 1 });
        }
      }
    }
    return result;
  }
  