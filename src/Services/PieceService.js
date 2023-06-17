export function validMove(from,to,piece,board){

    if(piece.type=='P') {
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
            console.log(board[to.x][to.y].valid)
            if(piece.color==0 && from.x!=6) return false;
            if(piece.color==1 && from.x!=1) return false;
            if(colsMoved==1 || board[to.x][to.y].valid) return false;

        }
        //if moved 1 row
        if(rowsMoved==1)
        {
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

    if(piece.type=='N'){
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
       
    return true;
}