import React from "react";
import { useLocalStorage } from "./useLocalStorage";


const TodoContext = React.createContext();

// TODO: Study about context, providers, how and why use it?
// Props drilling

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const completedTodos = todos.filter((todo) => todo.completed).length;
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

  const addTodo = (text) => {
    const newTodos = [...todos];
    const date = new Date()
    newTodos.push({
      id: `id-${date.getTime()}`,
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

  const changeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed; // true -> false, false -> true
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        changeTodo,
        addTodo,
        deleteTodo,
        open,
        setOpen,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}
export { TodoContext, TodoProvider };
