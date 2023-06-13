import './Tile.css'
function Tile({x,y,imageSrc}){

    const className=`tile ${ (x+y)%2===0? 'white' : 'black'}`;
    return <div className={className}>
    </div>
}
export default Tile;