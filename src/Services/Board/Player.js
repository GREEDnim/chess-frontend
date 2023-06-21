export class Player{
    
    static color=-1;
    static getColor(){
        return this.turn;
    }
    static setColor(x){
        this.color=x;
    }
}