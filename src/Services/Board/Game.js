export class Game{
    
    static turn=0;
    static getTurn(){
        return this.turn;
    }
    static changeTurn(){
        if(this.turn==0) this.turn=1;
        else this.turn=0;
    }
}
