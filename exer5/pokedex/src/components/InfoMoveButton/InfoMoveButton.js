import React from 'react';
import './InfoMoveButton.css';

const InfoMoveButton = ({ displayInfo, onInfoMoveButtonClick }) => (
  <div className = "infomove-container">
    <button className = "infomove-button"
      onClick={() => onInfoMoveButtonClick(true)}
      style={{ backgroundColor: displayInfo ? '#90ee90' : '#e5e5e5' }}
    >
      Info
    </button>
    <button className = "infomove-button"
      onClick={() => onInfoMoveButtonClick(false)}
      style={{ backgroundColor: !displayInfo ? '#90ee90' : '#e5e5e5' }}
    >
      Moves
    </button>
  </div>
);

export default InfoMoveButton;