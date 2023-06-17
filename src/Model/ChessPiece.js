export class ChessPiece{

    type='invalid';
    color='invalid';
    x=-1;
    y=-1;
    src=null;
    valid=false;
    
    

    constructor(type,color,x,y,src,valid){
        this.type=type;
        this.color=color;
        this.x=x;
        this.y=y;
        this.src=src;
        this.valid=valid;
    }

}