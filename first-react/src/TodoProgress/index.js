import React from "react";
import { TodoContext } from "../TodoContext";
import "./styles.css";

function TodoProgress() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  const handleClickProgress = () => {
    console.log("Show progress...");
  };

  return (
    <>
      <label className="progress-label" onClick={handleClickProgress}>
        Your progress:
      </label>
      <progress id="file" value={`${completedTodos}`} max={`${totalTodos}`}></progress>
    </>
  );
}

export { TodoProgress };
