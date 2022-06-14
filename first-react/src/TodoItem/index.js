import React from "react";
import { FaSun } from "react-icons/fa";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className={`todo-item ${props.completed && "todo-item--complete"}`}>
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        <FaSun />
      </span>
      <p
        className={`todo-item-p ${props.completed && "todo-item-p--complete"}`}
      >
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}></span>
    </li>
  );
}

export { TodoItem };
