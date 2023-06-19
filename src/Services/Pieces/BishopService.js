export function validBishopMove(from,to,board){
    const piece=board[from.x][from.y];
    // checking if its in a diagonal 
    if(Math.abs(from.x-to.x)!=Math.abs(from.y-to.y)) return false;
    //going towards top, row decreases
    if(to.x<from.x){
        //towards left , column decreases
        if(to.y<from.y){
            for( let i=from.x-1,j=from.y-1 ;(i>=0 && j>=0 && i>to.x && j>to.y );i--,j--){
                if(board[i][j].valid) return false;
            }
            if(board[to.x][to.y].valid && board[to.x][to.y].color==piece.color) return false;
            return true;
        }
        //towards right,  column increases
        if(to.y>from.y){
            for(let i=from.x-1,j=from.y+1; (i>=0 && j<=7 && i>to.x && j<to.y);i--,j++){
                if(board[i][j].valid) return false;
            }
            if(board[to.x][to.y].valid && board[to.x][to.y].color==piece.color) return false;
            return true;
        }   
    }
    //going towards bottom, row increases
    if(to.x>from.x){
        //toward left , col dec
        if(to.y<from.y){
            for(let i=from.x+1,j=from.y-1;(i<=7 && j>=0 && i<to.x && j>to.y );i++,j--){
                if(board[i][j].valid) return false;
            }
            if(board[to.x][to.y].valid && board[to.x][to.y].color==piece.color) return false;
            return true;
        }
        //toward right, col inc
        if(to.y>from.y){
            for(let i=from.x+1,j=from.y+1;(i<=7 && j<=7 && i<to.x && j<to.y);i++,j++){
                if(board[i][j].valid) return false;
            }
            if(board[to.x][to.y].valid && board[to.x][to.y].color==piece.color) return false;
            return true;
        }     
    }
    return false;
}

export function isBishopAttackingKing(king,board){

    let oppBishopColor=board[king.x][king.y].color==0?1:0;
     //bishop 
        // top left.
        for(let x=king.x-1,y=king.y-1;x>=0 && y>=0;x--,y--){
            if(board[x][y].valid){
                if(board[x][y].type=='B' && board[x][y].color==oppBishopColor) return true;
                break;
            }
        }
        //top right
        for(let x=king.x-1,y=king.y+1;x>=0 && y<8 ; x--,y++){
            if(board[x][y].valid){
                if(board[x][y].type=='B' && board[x][y].color==oppBishopColor) return true;
                break;
            }
        }
        //bottom left
        for(let x=king.x+1,y=king.y-1;x<8 && y>=0;x++,y--){
            if(board[x][y].valid){
                if(board[x][y].type=='B' && board[x][y].color==oppBishopColor) return true;
                break;
            }
        }
        //bottom right
        for(let x=king.x+1,y=king.y+1;x<8 && y<8 ; x++,y++){
            if(board[x][y].valid){
                if(board[x][y].type=='B'  && board[x][y].color==oppBishopColor) return true;
                break;
            }
        }
        return false;

}
export function getBishopsPositions(color,board){
    let result=[];
    for(let x=0;x<board.length;x++){
        for(let y=0;y<board[x].length;y++){
            if(board[x][y].valid && board[x][y].color==color && board[x][y].type=='B') result.push({x,y});
        }
    }
    return result;
}
export function getPossibleBishopMoves(bishop, color) {
    let result = [];
  
    // Top left
    for (let i = bishop.x - 1, j = bishop.y - 1; i >= 0 && j >= 0; i--, j--) {
      result.push({ x: i, y: j });
    }
  
    // Top right
    for (let i = bishop.x - 1, j = bishop.y + 1; i >= 0 && j <= 7; i--, j++) {
      result.push({ x: i, y: j });
    }
  
    // Bottom left
    for (let i = bishop.x + 1, j = bishop.y - 1; i <= 7 && j >= 0; i++, j--) {
      result.push({ x: i, y: j });
    }
  
    // Bottom right
    for (let i = bishop.x + 1, j = bishop.y + 1; i <= 7 && j <= 7; i++, j++) {
      result.push({ x: i, y: j });
    }
  
    return result;
  }
  