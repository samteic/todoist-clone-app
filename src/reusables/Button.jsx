import React from 'react';

const Button = ({ label, textColor, width, height, onClick }) => {
  const buttonStyle = {
  
    color: textColor || 'white',
    width: width || '8rem',
    height: height || '2.5rem',
  };

  return (
    <button
      className="rounded-lg font-semibold text-lg bg-red-600"
      style={buttonStyle}
      onClick={onClick}
    >
      {label || 'Start for Free'}
    </button>
  );
};

export default Button;
