import { useState } from 'react';
import React from 'react';
import './Piece.css';
import { Game } from '../../../../../Services/Board/Game';
const Piece = ({ src,coords,gameOver,pieceColor,playerColor }) => {

  // console.log(coords);
  const[isDragging,setDragging]=useState(false)

  function dragStart(e) {
    // console.log(coords);
    e.dataTransfer.setData('text/plain', JSON.stringify(coords));
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
    <img className='chess-piece' draggable={ pieceColor==playerColor && !gameOver && Game.getTurn()==pieceColor  } onDragStart={dragStart} onDragEnd={dragEnd} src={src}  style={style} alt="" />
  );
};

export default Piece;

