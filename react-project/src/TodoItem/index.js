import React from "react";
import { FcCheckmark } from "react-icons/fc";
import "./TodoItem.css";

function TodoItem(props) {
  const { completed, text } = props;

  return (
    <li className={`todo-item ${completed && "todo-item--complete"}`}>
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        {completed && ( <FcCheckmark />)}
      </span>
      <p
        className={`todo-item-p ${completed && "todo-item-p--complete"}`}
      >
        {text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
