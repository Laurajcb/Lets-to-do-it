import React from "react";
import { TodoContext } from "../TodoContext";
import Drawer from "@mui/material/Drawer";
import { TodoBadges } from "../TodoBadges";
import "./styles.css";

function TodoProgress(props) {
  const { completedTodos, totalTodos, open, setOpen } = React.useContext(TodoContext);
  const onClick = () => {
    setOpen(true)
  };

  const onClose = () => {
    setOpen(false);
  }

  return (
    <>
      <div className="progress-button box">
        <label className="progress-label" onClick={onClick}>
          Check your progress :
        </label>
      </div>
      <Drawer anchor="right"
        open={open}
        onClose={onClose}
      >
        <TodoBadges />
      </Drawer>
      <progress id="file" value={`${completedTodos}`} max={`${totalTodos}`}></progress>
    </>
  );
}

export { TodoProgress };
