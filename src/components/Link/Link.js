import React from 'react';
import './Link.css';

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span className='link active'>{children}</span>
  }

  return (
    <a href='#'
      className='link float'
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

export default Link;