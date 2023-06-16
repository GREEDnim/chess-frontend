
import React from 'react';
import './Piece.css';

const Piece = ({ piece }) => {
  function dragStart(e) {
    e.dataTransfer.setData('text/plain', JSON.stringify(piece));
  }

  return (
    <img className='chess-piece' draggable={true} onDragStart={dragStart} src={piece.src} alt="" />
  );
};

export default Piece;

