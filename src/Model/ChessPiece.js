export class ChessPiece{

    type='invalid';
    color='invalid';
    src=null;
    valid=false;
    
    constructor(type,color,src,valid){
        this.type=type;
        this.color=color;
        this.src=src;
        this.valid=valid;
    }

}