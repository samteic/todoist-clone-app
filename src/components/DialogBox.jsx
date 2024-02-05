import React, { useState } from 'react';


const DialogBox = ({ isOpen, onClose, children }) => {
  // Render nothing if the dialog is not open
  if (!isOpen) return null;

  return (
    <div className="rounded-xl  absolute">
      <div className="dialog-content">
        <button className="close-button" onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  );
};

export default DialogBox;
