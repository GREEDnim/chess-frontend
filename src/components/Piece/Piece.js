import React from 'react';
import { useDrag,DragPreviewImage } from 'react-dnd';
import './Piece.css'

const Piece = ({piece}) => {

  const[{isDragging},drag]=useDrag(()=>({
    type:'piece',
    item:{...piece},
    collect:(monitor)=>({
      isDragging:monitor.isDragging(),
    })
  }));
 
  return (
       <img className='chess-piece' ref={drag} src={piece.src} alt=""   />
  )
 
};

export default Piece;
