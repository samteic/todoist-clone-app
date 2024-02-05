import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ label, textColor, width, height }) => {
  const buttonStyle = {
  
    color: textColor || 'white',
    width: width || '8rem',
    height: height || '2.5rem',
  };
 const navigate = useNavigate()

 const handleClick = () => {
  navigate("/signup")
 }
  return (
    <button
      className="rounded-lg font-semibold text-lg bg-red-600 hover:bg-red-700"
      style={buttonStyle}
      onClick={handleClick}
    >
      {label || 'Start for Free'}
    </button>
  );
};

export default Button;
