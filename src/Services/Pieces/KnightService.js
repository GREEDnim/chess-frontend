export function validKnightMove(from,to,board){
    //all possible positions;
    let possible=[[2,-1],[2,1],[1,-2],[1,2],[-1,-2],[-1,2],[-2,1],[-2,-1]];
    for(let i=0;i<possible.length;i++){
        let x=possible[i][0]+from.x;
        let y=possible[i][1]+from.y;
        if(to.x==x && to.y==y){
            // if that square is empty
            if(!board[x][y].valid) return true;
            // if it has a piece of different color
            if(board[from.x][from.y].color!=board[x][y].color) return true;
        }
    }
    // either piece is same color or not possible move
    return false;
}

export function isKnightAttackingKing(king,board){

    let oppKnightColor=board[king.x][king.y].color==0?1:0;
    let p=[[2,-1],[2,1],[1,-2],[1,2],[-1,-2],[-1,2],[-2,1],[-2,-1]];

    for(let i=0;i<p.length;i++){
        let pos={x:king.x+p[i][0],y:king.y+p[i][1]}
        //checking in bounds
        if(pos.x<0 || pos.x>7 || pos.y<0 || pos.y>7) continue;
        // if piece is knight and of opposite color.
        if(board[pos.x][pos.y].valid && board[pos.x][pos.y].type=='N'){
            if(board[pos.x][pos.y].color==oppKnightColor) return true;
        }
    }
    return false;
}
export function getKnightsPositions(color,board){
    let result=[];
    for(let x=0;x<board.length;x++){
        for(let y=0;y<board[x].length;y++){
            if(board[x][y].valid && board[x][y].color==color && board[x][y].type=='N') result.push({x,y});
        }
    }
    return result;
}

export function getPossibleKnightMoves(knight, color) {
    let result = [];
    let possible = [[2, -1], [2, 1], [1, -2], [1, 2], [-1, -2], [-1, 2], [-2, 1], [-2, -1]];
  
    for (let i = 0; i < possible.length; i++) {
      let x = possible[i][0] + knight.x;
      let y = possible[i][1] + knight.y;
  
      if (x < 0 || x > 7 || y < 0 || y > 7) continue;
  
      result.push({ x, y });
    }
  
    return result;
  }
  