import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  const onClickButton = (mgs) => {
    alert(mgs);
  };
  return (
    <button
      className="CreateTodoButton"
      onClick={() => onClickButton("Here goes a modal")}
    >
      +
    </button>
  );
}
export { CreateTodoButton };
