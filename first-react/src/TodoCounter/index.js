import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';


function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  
  return (
    <>
    <h1 className="TitleTodoCounter"> Your tasks</h1>
    <h2 className="TodoCounter">Completed {completedTodos} of {totalTodos}</h2>
    </>
  );
}

export { TodoCounter };