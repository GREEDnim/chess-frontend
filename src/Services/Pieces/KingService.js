export function validKingMove(from,to,board){
    // moving more than one square
    if(Math.abs(from.x-to.x)>1 || Math.abs(from.y-to.y)>1) return false;
    //same square
    if(from.x==to.x && from.y==to.y) return false;
    //same color
    if(board[from.x][from.y].color==board[to.x][to.y].color) return false;
    return true;
}

export function isKingAttackingKing(king,board){
    let oppKingColor=board[king.x][king.y].color==0?1:0;
    //all possible places of opp king
    let p=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
    for(let i=0;i<p.length;i++){
        let x=king.x+p[i][0],y=king.y+p[i][1];
        if(x<0 || x>7 || y<0 || y>7) continue;
        if(board[x][y].valid && board[x][y].type=='K'){
            if(board[x][y].color==oppKingColor) return true;
        }
    }
    return false;
}

export function getKingPosition(color,board){
    let king={};
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
            if(board[i][j].color==color && board[i][j].type=='K'){
                king.x=i; king.y=j; break;
            }
        }
    }
    return king;
}

export function getPossibleKingMoves(king, color) {
    let result = [];
    let p = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    for (let i = 0; i < p.length; i++) {
      let x = p[i][0] + king.x;
      let y = p[i][1] + king.y;
  
      if (x < 0 || x > 7 || y < 0 || y > 7) continue;
      result.push({ x, y });
    }
    return result;
  }
  


