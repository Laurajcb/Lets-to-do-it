import React from "react";
import { AppUi } from "./AppUi";

/*const defaultTodos = [
  { id: 1, text: "Cut onions", completed: false },
  { id: 2, text: "Take react course", completed: false },
  { id: 3, text: "Cry ", completed: false },
  { id: 4, text: "Lalalal ", completed: true },
  { id: 5, text: "Nononono ", completed: false },
];
*/

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem('itemName');
  let parsedItem;
  
  if (!localStorageItem){
    localStorage.setItem('itemName', JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem('itemName', stringifiedItem);
    setItem(newItem);
  };
    return [
      item,
      saveItem,
    ];
}

function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

   

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];

    newTodos[todoIndex] = {
      text: todos[todoIndex].text,
      completed: true,
    };
    saveTodos(newTodos);
  };
    const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUi
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
