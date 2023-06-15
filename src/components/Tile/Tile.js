import './Tile.css'
import Piece from '../Piece/Piece';
function Tile({x,y,imageSrc}){

    const className=`tile ${ (x+y)%2===0? 'white' : 'black'}`;
    return <div className={className} data-x={x} data-y={y} key={`${x}-${y}`} >
        {imageSrc?<Piece imageSrc={imageSrc}></Piece>:null}
    </div>
}  
export default Tile;