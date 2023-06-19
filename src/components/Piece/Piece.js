import { useState } from 'react';
import React from 'react';
import './Piece.css';

const Piece = ({ piece }) => {

  const[isDragging,setDragging]=useState(false)

  function dragStart(e) {
    console.log('dragStart',piece)
    e.dataTransfer.setData('text/plain', JSON.stringify(piece));
    setDragging(true);
  
  }
  
  function dragEnd(){
    setDragging(false);
  }

  const style={
    opacity:isDragging ?0:1,
    cursor:isDragging?'grabbing':'grab',
    userSelect:'none',
  }

  return (

    <img className='chess-piece' draggable={true} onDragStart={dragStart} onDragEnd={dragEnd} src={piece.src}  style={style} alt="" />
  );
};

export default Piece;

