import React from 'react'
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
//import './App.css';

const todos = [
  { id: 1, text: 'Cut onions', completed: false },
  { id: 2, text: 'Take react course', completed: false },
  { id: 3, text: 'Cry ', completed: false }
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />


      <TodoList todos={todos} >

      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
