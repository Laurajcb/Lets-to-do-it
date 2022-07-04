import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';


function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  
  return (
    <>
    <section className='counter-tittles'>
    <h1 className="title-todo-counter"> Your tasks</h1>
    <h2 className="todo-counter">{`Completed ${completedTodos} of ${totalTodos}`}</h2>
    </section>
    </>
  );
}

export { TodoCounter };