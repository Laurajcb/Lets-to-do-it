import React from 'react'
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

const todos = [
  { id: 1, text: 'Cut onions', completed: false },
  { id: 2, text: 'Take react course', completed: false },
  { id: 3, text: 'Cry ', completed: false },
  { id: 4, text: 'Lalalal ', completed: false },
  { id: 5, text: 'Nononono ', completed: false },
];

function App() {
  return (
    <section className="App">
      <TodoCounter />

      <TodoSearch />


      <TodoList todos={todos} >
        <TodoItem></TodoItem>
      </TodoList>

      <CreateTodoButton />

    </section>
  );
}

export default App;
