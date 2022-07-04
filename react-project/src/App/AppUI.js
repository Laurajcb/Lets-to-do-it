import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { TodoError } from "../TodoError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { TodoProgress } from "../TodoProgress";
import { TodoBadges } from "../TodoBadges";
import "./AppUI.css";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    changeTodo,
    deleteTodo,
    open,
    setOpen,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <main>
        <section className="progress-bar-section">
          <TodoProgress setOpen={setOpen} />
        </section>
        <section className="main-content-section">
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
                    key={`${todo.id}`}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => changeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                  />
                ))}
              </TodoList>
            </section>
          </section>
        </section>
      </main>
    </React.Fragment>
  );
}
export { AppUI };
