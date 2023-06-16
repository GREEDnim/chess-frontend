import React from 'react';
import './Piece.css'

const Piece = ({piece}) => {
function dragStart(e){
  e.dataTransfer.setData("piece/text", piece);
}
  
  return (
       <img className='chess-piece' draggable={true}  onDrag={dragStart} src={piece.src} alt=""   />
  )
 
};

export default Piece;
