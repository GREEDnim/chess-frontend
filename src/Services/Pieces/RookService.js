export function validRookMove(from,to,board){
    const piece=board[from.x][from.y];
    //same row, horizontal
    if(from.x==to.x){
       // go right
       if(from.y<to.y){
           for(let i=(from.y)+1;i<to.y;i++){
               if(board[from.x][i].valid) return false;
           }
           if(board[to.x][to.y].valid && board[to.x][to.y].color==piece.color) return false;
           return true;
       }
       //go left
       if(from.y>to.y){
           for(let i=(from.y)-1;i>to.y;i--){
               if(board[from.x][i].valid) return false;
           }
           if(board[to.x][to.y].valid && board[to.x][to.y].color==piece.color) return false;
           return true;
       }
       return false;
   }
   //same col, vertical
   else if(from.y==to.y){
       // go bottom
       if(from.x<to.x){
           for(let i=(from.x)+1;i<to.x;i++){
               if(board[i][to.y].valid) return false;
           }
           if(board[to.x][to.y].valid && board[to.x][to.y].color==piece.color) return false;
           return true;
       }
       //go top
       if(from.x>to.x){
           for(let i=(from.x)-1;i>to.x;i--){
               if(board[i][to.y].valid) return false;
           }
           if(board[to.x][to.y].valid && board[to.x][to.y].color==piece.color) return false;
           return true;
       }            
   }
   return false;
}

export function isRookAttackingKing(king,board){
    let oppRookColor=board[king.x][king.y].color==0?1:0;
    //rook 
        for(let y=king.y-1;y>=0;y--){
            if(board[king.x][y].valid){
                if(board[king.x][y].type=='R'  && board[king.x][y].color==oppRookColor) return true;
                break;
            }
        }
        //right
        for(let y=king.y+1;y<8;y++){
            if(board[king.x][y].valid){
                if(board[king.x][y].type=='R'  && board[king.x][y].color==oppRookColor) return true;
                break;
            }
        }
        //top
        for(let x=king.x-1;x>=0;x--){
            if(board[x][king.y].valid){
                if(board[x][king.y].type=='R' && board[x][king.y].color==oppRookColor) return true;
                break; 
            }
        }
        //bottom
        for(let x=king.x+1;x<8;x++){
            if(board[x][king.y].valid){
                if(board[x][king.y].type=='R' && board[x][king.y].color==oppRookColor) return true;
                break; 
            }
        }
        return false;
}
export function getRooksPositions(color,board){
    let result=[];
    for(let x=0;x<board.length;x++){
        for(let y=0;y<board[x].length;y++){
            if(board[x][y].valid && board[x][y].color==color && board[x][y].type=='R') result.push({x,y});
        }
    }
    return result;
}

export function getPossibleRookMoves(rook, color) {

    // console.log(rook,color)
    let result = [];
  
    // Right
    for (let i = rook.y + 1; i < 8; i++) {
      result.push({ x: rook.x, y: i });
    }
  
    // Left
    for (let i = rook.y - 1; i >= 0; i--) {
      result.push({ x: rook.x, y: i });
    }
  
    // Top
    for (let i = rook.x + 1; i < 8; i++) {
      result.push({ x: i, y: rook.y });
    }
  
    // Bottom
    for (let i = rook.x - 1; i >= 0; i--) {
      result.push({ x: i, y: rook.y });
    }
  
    return result;
  }
  