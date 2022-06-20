import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodoError } from "../TodoError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import "./AppUI.css";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <main>
        <section className="create-task-section">
          <TodoForm />
        </section>
        <section className="to-do-section">
          <section className="to-do-section-container">
          <TodoCounter />
          <TodoSearch />
          <TodoList>
            {error && <TodoErro error={error} />}
            {loading && <TodosLoading />}
            {!loading && !searchedTodos.length && <EmptyTodos />}

            {searchedTodos.map((todo, index) => (
              <TodoItem
                key={`${todo.text}-${index}`}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
          </section>
        </section>
      </main>
    </React.Fragment>
  );
}
export { AppUI };
