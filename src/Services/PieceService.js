import { ChessPiece } from "../Model/ChessPiece";
export function validPawnMove(from,to,piece,board){
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
export function validKnightMove(from,to,piece,board){
    //all possible positions;
    let possible=[[2,-1],[2,1],[1,-2],[1,2],[-1,-2],[-1,2],[-2,1],[-2,-1]];
    for(let i=0;i<possible.length;i++){
        let x=possible[i][0]+from.x;
        let y=possible[i][1]+from.y;
        if(to.x==x && to.y==y){
            // if that square is empty
            if(!board[x][y].valid) return true;
            // if it has a piece of different color
            if(piece.color!=board[x][y].color) return true;
        }
    }
    // either piece is same color or not possible move
    return false;
}
export function validRookMove(from,to,piece,board){
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
    }
    //same col, vertical
    else if(from.y==to.y){
        // go top
        if(from.x<to.x){
            for(let i=(from.x)+1;i<to.x;i++){
                if(board[i][to.y].valid) return false;
            }
            if(board[to.x][to.y].valid && board[to.x][to.y].color==piece.color) return false;
            return true;
        }
        //go bottom
        if(from.x>to.x){
            for(let i=(from.x)-1;i>to.x;i--){
                if(board[i][to.y].valid) return false;
            }
            if(board[to.x][to.y].valid && board[to.x][to.y].color==piece.color) return false;
            return true;
        }            
    }
    else return false;
}
export function validBishopMove(from,to,piece,board){
    // checking if its in a diagonal 
    if(Math.abs(from.x-to.x)!=Math.abs(from.y-to.y)) return false;
    //going towards top
    if(to.x<from.x){
        //towards left , row and column decreases
        if(to.y<from.y){
            for( let i=from.x-1,j=from.y-1 ;(i>=0 && j>=0 && i>to.x && j>to.y );i--,j--){
                if(board[i][j].valid) return false;
            }
            if(board[to.x][to.y].valid && board[to.x][to.y].color==piece.color) return false;
            return true;
        }
        //towards right, row decreases, column increases
        if(to.y>from.y){
            for(let i=from.x-1,j=from.y+1; (i>=0 && j<=7 && i>to.x && j<to.y);i--,j++){
                if(board[i][j].valid) return false;
            }
            if(board[to.x][to.y].valid && board[to.x][to.y].color==piece.color) return false;
            return true;
        }   
    }
    //going towards bottom
    if(to.x>from.x){
        //toward left , row inc , col dec
        if(to.y<from.y){
            for(let i=from.x+1,j=from.y-1;(i<=7 && j>=0 && i<to.x && j>to.y );i++,j--){
                if(board[i][j].valid) return false;
            }
            if(board[to.x][to.y].valid && board[to.x][to.y].color==piece.color) return false;
            return true;
        }
        //toward right, row inc, col inc
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
export function validQueenMove(from,to,piece,board){
    return validRookMove(from,to,piece,board) || validBishopMove(from,to,piece,board);
}
function validKingMove(from,to,piece,board){
    // moving more than one square
    if(Math.abs(from.x-to.x)>1 || Math.abs(from.y-to.y)>1) return false;
    //same square
    if(from.x==to.x && from.y==to.y) return false;
    //same color
    if(piece.color==board[to.x][to.y].color) return false;
    return true;
}
export function opensCheck(color,board){
    // finding kings position.
    //color : 0- white , 1-black
    let king={};
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
            if(board[i][j].color==color && board[i][j].type=='K'){
                king.x=i; king.y=j; break;
            }
        }
    }
    // console.log(king);
    // check if other color pawn in attacking.

    if(color==0){
        let p=[[-1,-1],[-1,1]];
        for(let i=0;i<p.length;i++){
            let pos={x:king.x+p[i][0],y:king.y+p[i][1]};
            if(pos.x<0 || pos.y<0 || pos.x>7 || pos.y>7) continue;
            if(board[pos.x][pos.y].valid && board[pos.x][pos.y].type=='P' ){
                if(board[pos.x][pos.y].color==1) return true;
            }
        } 
    } 
    else if(color==1){
        let p=[[1,-1],[1,1]];
        for(let i=0;i<p.length;i++){
            let pos={x:king.x+p[i][0],y:king.y+p[i][1]};
            if(pos.x<0 || pos.y<0 || pos.x>7 || pos.y>7) continue;
            if(board[pos.x][pos.y].valid && board[pos.x][pos.y].type=='P'){
                if(board[pos.x][pos.y].color==0) return true;
            }
        } 
    }

    // knight
    //all possible knight positions of opp
    let p=[[2,-1],[2,1],[1,-2],[1,2],[-1,-2],[-1,2],[-2,1],[-2,-1]];

    for(let i=0;i<p.length;i++){
        let pos={x:king.x+p[i][0],y:king.y+p[i][1]}
        //checking in bounds
        if(pos.x<0 || pos.x>7 || pos.y<0 || pos.y>7) continue;
        // if piece is knight and of opposite color.
        if(board[pos.x][pos.y].valid && board[pos.x][pos.y].type=='N'){
            if(color==0 && board[pos.x][pos.y].color==1) return true;
            if(color==1 && board[pos.x][pos.y].color==0) return true;
        }
    }

    //bishop and queen
        // top left.
        for(let x=king.x-1,y=king.y-1;x>=0 && y>=0;x--,y--){
            if(board[x][y].valid){
                if(board[x][y].type=='B' || board[x][y].type=='Q'){
                    if(color==1 && board[x][y].color==0) return true;
                    if(color==0 && board[x][y].color==1) return true;
                }
                break;
            }
        }
        //top right
        for(let x=king.x-1,y=king.y+1;x>=0 && y<8 ; x--,y++){
            if(board[x][y].valid){
                if(board[x][y].type=='B' || board[x][y].type=='Q'){
                    if(color==1 && board[x][y].color==0) return true;
                    if(color==0 && board[x][y].color==1) return true;
                }
                break;
            }
        }
        //bottom left
        for(let x=king.x+1,y=king.y-1;x<8 && y>=0;x++,y--){
            if(board[x][y].valid){
                if(board[x][y].type=='B' || board[x][y].type=='Q'){
                    if(color==1 && board[x][y].color==0) return true;
                    if(color==0 && board[x][y].color==1) return true;
                }
                break;
            }
        }
        //bottom right
        for(let x=king.x+1,y=king.y+1;x<8 && y<8 ; x++,y++){
            if(board[x][y].valid){
                if(board[x][y].type=='B' || board[x][y].type=='Q'){
                    if(color==1 && board[x][y].color==0) return true;
                    if(color==0 && board[x][y].color==1) return true;
                }
                break;
            }
        }
    //rook and queen
        //left
        for(let y=king.y-1;y>=0;y--){
            if(board[king.x][y].valid){
                if(board[king.x][y].type=='R' || board[king.x][y].type=='Q'){
                    if(color==1 && board[king.x][y].color==0) return true;
                    if(color==0 && board[king.x][y].color==1) return true;
                }
                break;
            }
        }
        //right
        for(let y=king.y+1;y<8;y++){
            if(board[king.x][y].valid){
                if(board[king.x][y].type=='R' || board[king.x][y].type=='Q'){
                    if(color==1 && board[king.x][y].color==0) return true;
                    if(color==0 && board[king.x][y].color==1) return true;
                }
                break;
            }
        }
        //top
        for(let x=king.x-1;x>=0;x--){
            if(board[x][king.y].valid){
                if(board[x][king.y].type=='R' || board[x][king.y].type=='Q'){
                    if(color==1 && board[x][king.y].color==0) return true;
                    if(color==0 && board[x][king.y].color==1) return true;
                }
                break; 
            }
        }
        //bottom
        for(let x=king.x+1;x<8;x++){
            if(board[x][king.y].valid){
                if(board[x][king.y].type=='R' || board[x][king.y].type=='Q'){
                    if(color==1 && board[x][king.y].color==0) return true;
                    if(color==0 && board[x][king.y].color==1) return true;
                }
                break; 
            }
        }
    //king
        //all possible places of opp king
        p=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];

        for(let i=0;i<p.length;i++){
            let x=king.x+p[i][0],y=king.y+p[i][1];
            if(x<0 || x>7 || y<0 || y>7) continue;
            if(board[x][y].valid && board[x][y].type=='K'){
                if(color==1 && board[x][y].color==0) return true;
                if(color==0 && board[x][y].color==1) return true;
            }
        }

    // doesnt open check.
    return false;


}
export function validMove(from,to,piece,board){

    switch (piece.type) {
        case 'P': {
            let valid=validPawnMove(from, to, piece, board);
            if(!valid) return false;
            
            // change the board
            let oldFrom=board[from.x][from.y];
            let oldTo=board[to.x][to.y];
            changeBoard(from,to,new ChessPiece('invalid', 'invalid', -1, -1, null, false),oldFrom,board);
            //check if keeping the move results in a open check.
            let check=opensCheck(piece.color,board);
            //changing the board back;
            changeBoard(from,to,oldFrom,oldTo,board);

            // console.log(valid,check);
            return !check;
        }
        case 'N': {
            let valid=validKnightMove(from, to, piece, board);
            if(!valid) return false;

            // change the board
            let oldFrom=board[from.x][from.y];
            let oldTo=board[to.x][to.y];
            changeBoard(from,to,new ChessPiece('invalid', 'invalid', -1, -1, null, false),oldFrom,board);
            //check if keeping the move results in a open check.
            let check=opensCheck(piece.color,board);
            //changing the board back;
            changeBoard(from,to,oldFrom,oldTo,board);

            return !check;
        }
        case 'R': {
            let valid=validRookMove(from, to, piece, board);
            if(!valid) return false;

            // change the board
            let oldFrom=board[from.x][from.y];
            let oldTo=board[to.x][to.y];
            changeBoard(from,to,new ChessPiece('invalid', 'invalid', -1, -1, null, false),oldFrom,board);
            //check if keeping the move results in a open check.
            let check=opensCheck(piece.color,board);
            //changing the board back;
            changeBoard(from,to,oldFrom,oldTo,board);
            
            return !check;
        }
        case 'B': {
            // console.log(from,to,piece.type,piece.color)
            let valid=validBishopMove(from, to, piece, board);
            // console.log(valid)
            if(!valid) return false;

            // change the board
            let oldFrom=board[from.x][from.y];
            let oldTo=board[to.x][to.y];
            changeBoard(from,to,new ChessPiece('invalid', 'invalid', -1, -1, null, false),oldFrom,board);
            //check if keeping the move results in a open check.
            let check=opensCheck(piece.color,board);
            //changing the board back;
            changeBoard(from,to,oldFrom,oldTo,board);
            
            return !check;
        }
        case 'Q': {
            let valid=validQueenMove(from, to, piece, board);
            if(!valid) return false;

            // change the board
            let oldFrom=board[from.x][from.y];
            let oldTo=board[to.x][to.y];
            changeBoard(from,to,new ChessPiece('invalid', 'invalid', -1, -1, null, false),oldFrom,board);
            //check if keeping the move results in a open check.
            let check=opensCheck(piece.color,board);
            //changing the board back;
            changeBoard(from,to,oldFrom,oldTo,board);
            
            return !check;
        }
        case 'K': {
            let valid=validKingMove(from, to, piece, board);
            if(!valid) return false;

            // change the board
            let oldFrom=board[from.x][from.y];
            let oldTo=board[to.x][to.y];
            changeBoard(from,to,new ChessPiece('invalid', 'invalid', -1, -1, null, false),oldFrom,board);
            //check if keeping the move results in a open check.
            let check=opensCheck(piece.color,board);
            //changing the board back;
            changeBoard(from,to,oldFrom,oldTo,board);
            
            return !check;
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


