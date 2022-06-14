import React from "react";
import "./TodoForm.css";
import { TodoContext, TodoProvider } from "../TodoContext";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
  };

  return (
    <section className="create-task-section">
      <div className="create-your-task-tittle">
        <h3 className="create-new-task">Create Your new task</h3>
      </div>
      <form onSubmit={onSubmit}>
        <div className="create-task-input">
          <label>Task name</label>
          <input
            className="place-holder-field"
            placeholder="Type your new To do"
            type="text"
            value={newTodoValue}
            onChange={onChange}
          />
        </div>
        <div className="button-summit">
          <button type="submit" className="button-create-task">
            Create task
          </button>
        </div>
      </form>
      <div className="img-create-task">
        <object
          data="../assets/img/wfh_1.svg"
          width="562px"
          heigh="950px"
        ></object>
      </div>
    </section>
  );
}

export { TodoForm };
