import React from 'react';
import './CreateTodoButton.css';

function AddNewTodoButton(props) {
  const onClickButton = () => {
   return 0
  };
  
  return (
    <button
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      +
    </button>
  );
}

export { AddNewTodoButton };
