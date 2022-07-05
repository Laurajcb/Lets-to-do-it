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
    setNewTodoValue("");
  };

  return (
    <section className="create-task">
      <section className="create-task-form-container">
        <div className="create-your-task-tittle">
          <h3 className="create-new-task">Create your new task</h3>
        </div>
        <form onSubmit={onSubmit}>
          <div className="create-task-input">
            <div className="label">
              <label>Task name</label>
            </div>
            <div className="input">
              <input
                className="place-holder-field"
                placeholder="Type your new To do here"
                type="text"
                value={newTodoValue}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="button-summit">
            <button type="submit" className="button-create-task">
              Create task
            </button>
          </div>
        </form>
        <div className="img-create-task">
          <img src="../assets/img/wfh_1.svg" />
        </div>
      </section>
    </section>
  );
}

export { TodoForm };
