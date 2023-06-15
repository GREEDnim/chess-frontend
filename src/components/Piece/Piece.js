import React from 'react';
const Piece = ({ imageSrc}) => {
  return <img  className='chess-piece' src={imageSrc} alt=""  />;
};

export default Piece;
