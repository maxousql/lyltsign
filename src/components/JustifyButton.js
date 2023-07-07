import React from 'react';

const JustifyButton = ({ onClick, disabled }) => {
  return (
    <button className="btn-justifier" onClick={onClick} disabled={disabled}>
      Justifier
    </button>
  );
};

export default JustifyButton;
