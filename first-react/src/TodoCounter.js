import React from 'react';
import './TodoCounter.css';


function TodoCounter() {
  return (
    <>
    <h2 className="TitleTodoCounter">Your Tasks</h2>
    <h1 className="TodoCounter">3 of 5 ToDos completed ✅</h1>
    </>
  );
}

export { TodoCounter };