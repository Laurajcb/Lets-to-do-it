import React from "react";
import { TodoItem } from "../TodoItem";
import "./TodoList.css";

function TodoList(props) {
  const todos = props.todos;
  return (
    <section className="list-todo">
      <ul>{props.children}</ul>
    </section>
  );
}

export { TodoList };
