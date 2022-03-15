import React from 'react';
import { TodoItem } from './TodoItem';
import './TodoList.css';


function TodoList(props) {
  const todos = props.todos;
  return (
    <section className= ' sectionTodoList'>
      {todos.map((todo) => {
        return (
          <TodoItem key={todo.id} text={todo.text} completed={todo.completed} />
        )
      })}
    </section>
  );
};


export { TodoList };