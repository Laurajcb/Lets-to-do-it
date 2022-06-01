import React from "react";
import { TodoItem } from "../TodoItem";
import "./TodoList.css";

function TodoList(props) {
  const todos = props.todos;
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
}

export { TodoList };
