import { validMove,opensCheck} from "./PieceService";
//export function opensCheck(color,board)

//checkmate.
// also check if currently in check , else no checkmate.
// for every piece, get an array of its possible valid move position, (not confirm valid , but has all confirm valids).
// call validmove for every piece and every move
// if any one returns true, then no checkmate.
export function checkMate(board,color){
    // console.log(color);
    if(!opensCheck (color,board) ) {
        console.log('oc');
        return false;
    }

    //  pawns.
    let pawns=getPawnsPositions(board,color);
    for(let i=0;i<pawns.length;i++){
        let from=pawns[i];
        let vm=getPossiblePawnMoves(from,color);
        for(let j=0;j<vm.length;j++){
            let to=vm[j];
            if(validMove(from,to,board[from.x][from.y],board)) {
                console.log('p');
                return false;
            }
        }
    }
    // rooks
    let rooks=getRooksPositions(board,color);
    for(let i=0;i<rooks.length;i++){
        let from=rooks[i];
        let vm=getPossibleRookMoves(from,color);
        for(let j=0;j<vm.length;j++){
            let to=vm[j];
            if(validMove(from,to,board[from.x][from.y],board)) {
                console.log('r')
                return false;
            }
        }
    }
    //knights
    let knights=getKnightsPositions(board,color);
    for(let i=0;i<knights.length;i++){
        let from=knights[i];
        let vm=getPossibleKnightMoves(from,color);
        for(let j=0;j<vm.length;j++){
            let to=vm[j];
            if(validMove(from,to,board[from.x][from.y],board)) {
                console.log('n');
                return false;
            }
        }
    }
    //bishops
    let bishops=getBishopsPositions(board,color);
    for(let i=0;i<bishops.length;i++){
        let from=bishops[i];
        let vm=getPossibleBishopMoves(from,color);
        for(let j=0;j<vm.length;j++){
            let to=vm[j];
            if(validMove(from,to,board[from.x][from.y],board)){
                console.log('b');
                return false;
            }
        }
    }
    //queen
    let queens=getQueensPositions(board,color);
    for(let i=0;i<queens.length;i++){
        let from=queens[i];
        let vm=getPossibleQueenMoves(from,color);
        for(let j=0;j<vm.length;j++){
            let to=vm[j];
            if(validMove(from,to,board[from.x][from.y],board)) {
                console.log(from,to,'q')
                return false;
            }
        }
    }
    //king
    let kings=getKingsPositions(board,color);
    // console.log(kings);
    for(let i=0;i<kings.length;i++){
        // console.log(from);
        let from=kings[i];
        let vm=getPossibleKingMoves(from,color);
        for(let j=0;j<vm.length;j++){
            let to=vm[j];
            // console.log(to);
            if(validMove(from,to,board[from.x][from.y],board)) {
                console.log('king');
                return false;
            }
        }
    }
    return true;
}

function getPossiblePawnMoves(pos,color){
    let result=[];
    if(color==0){
        if(pos.x==6) {
            result.push({x:pos.x-2,y:pos.y})
        }
        else {
            if(pos.x-1>0) {
                result.push({x:pos.x-1,y:pos.y})
                if(pos.y-1>0) result.push({x:pos.x-1,y:pos.y-1});
                if(pos.y+1<8) result.push({x:pos.x-1,y:pos.y+1});
            }
        }
    }
    if(color==1){
        if(pos.x==1) {
            result.push({x:pos.x+2,y:pos.y})
        }
        else {
            if(pos.x+1<8) {
                result.push({x:pos.x+1,y:pos.y})
                if(pos.y-1>0) result.push({x:pos.x+1,y:pos.y-1});
                if(pos.y+1<8) result.push({x:pos.x+1,y:pos.y+1});
            }
        }
    }
    return result;
}
function getPossibleKnightMoves(pos,color){
    let result=[];
    let possible=[[2,-1],[2,1],[1,-2],[1,2],[-1,-2],[-1,2],[-2,1],[-2,-1]];
    for(let i=0;i<possible.length;i++){
        let x=possible[i][0]+pos.x;
        let y=possible[i][1]+pos.y;

        if(x<0 || x>7 || y<0 || y>7) continue;

        result.push({x,y});
    }
    return result;
}
function getPossibleBishopMoves(from,color){
    let result=[];
    //top left
    for( let i=from.x-1,j=from.y-1 ;(i>=0 && j>=0 );i--,j--){
        result.push({x:i,y:j});
    }
    //top right
    for(let i=from.x-1,j=from.y+1; (i>=0 && j<=7 );i--,j++){
        result.push({x:i,y:j});
    }
    //bottom left
    for(let i=from.x+1,j=from.y-1;(i<=7 && j>=0);i++,j--){
        result.push({x:i,y:j});
    }
    //bottom right
    for(let i=from.x+1,j=from.y+1;(i<=7 && j<=7 );i++,j++){
        result.push({x:i,y:j});
    }
    return result;
}
function getPossibleRookMoves(from , color){
    let result=[];
    //right
    for(let i=(from.y)+1;i<8;i++){
        result.push({x:from.x,y:i});
    }
    //left
    for(let i=(from.y)-1;i>=0;i--){
        result.push({x:from.x,y:i})
    }
    //top
    for(let i=(from.x)+1;i<8;i++){
        result.push({x:i,y:from.y});
    }
    //bottom
    for(let i=(from.x)-1;i>0;i--){
        result.push({x:i,y:from.y});
    }
    return result;
}
function getPossibleQueenMoves(from , color){
    return getPossibleBishopMoves(from,color).concat(getPossibleRookMoves(from,color));
}
function getPossibleKingMoves(from ,color){
    let result=[];
    let p=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
    for(let i=0;i<p.length;i++){
        let x=p[i][0]+from.x;
        let y=p[i][1]+from.y;

        if(x<0 || x>7 || y<0 || y>7) continue;
        result.push({x,y})
    }
    return result;

}
function getPawnsPositions(board,color){
    let result=[];
    for(let x=0;x<board.length;x++){
        for(let y=0;y<board[x].length;y++){
            if(board[x][y].valid && board[x][y].color==color && board[x][y].type=='P') result.push({x,y});
        }
    }
    return result;
}
function getKnightsPositions(board,color){
    let result=[];
    for(let x=0;x<board.length;x++){
        for(let y=0;y<board[x].length;y++){
            if(board[x][y].valid && board[x][y].color==color && board[x][y].type=='N') result.push({x,y});
        }
    }
    return result;
}
function getBishopsPositions(board,color){
    let result=[];
    for(let x=0;x<board.length;x++){
        for(let y=0;y<board[x].length;y++){
            if(board[x][y].valid && board[x][y].color==color && board[x][y].type=='B') result.push({x,y});
        }
    }
    return result;
}
function getRooksPositions(board,color){
    let result=[];
    for(let x=0;x<board.length;x++){
        for(let y=0;y<board[x].length;y++){
            if(board[x][y].valid && board[x][y].color==color && board[x][y].type=='R') result.push({x,y});
        }
    }
    return result;
}
function getQueensPositions(board,color){
    let result=[];
    for(let x=0;x<board.length;x++){
        for(let y=0;y<board[x].length;y++){
            if(board[x][y].valid && board[x][y].color==color && board[x][y].type=='Q') result.push({x,y});
        }
    }
    return result;
}
function getKingsPositions(board,color){
    console.log(board)
    let result=[];
    for(let x=0;x<board.length;x++){
        for(let y=0;y<board[x].length;y++){
            if(board[x][y].valid && board[x][y].color==color && board[x][y].type=='K') result.push({x,y});
        }
    }
    return result;
}

