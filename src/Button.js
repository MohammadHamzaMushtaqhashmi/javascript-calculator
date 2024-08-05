import React from 'react';

const Button = ({ content, onClick, id, className }) => {
  const handleClick = () => {
    onClick(content);
  };

  return (
    <button id={id} className={className} onClick={handleClick}>
      {content}
    </button>
  );
};

export default Button;
