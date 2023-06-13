import './Tile.css'
function Tile({x,y,imageSrc}){

    const className=`tile ${ (x+y)%2===0? 'white' : 'black'}`;
    return <div className={className}>
        {imageSrc?<div className="chess-piece" style={ {backgroundImage:`url(${imageSrc})`} } ></div>:null}
    </div>
}  
export default Tile;