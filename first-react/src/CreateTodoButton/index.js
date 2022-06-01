import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  const onClickButton = () => {
    props.setOpenModal(true);
  };
  return (
    <button
      className="CreateTodoButton"
      onClick={ onClickButton }
    >
      +
    </button>
  );
}
export { CreateTodoButton };
