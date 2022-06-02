import React from "react";
import { TodoContext, TodoProvider } from "../TodoContext";


function TodoForm() {
  const [ newTodoValue, setNewTodoValue ] = React.useState("");
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);
  
  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };
  
  return (
    <form onSubmit={onSubmit}>
      <label></label>
      <textarea
      value={newTodoValue}
      onChange={onChange}
      placeholder="Write your new to do"
      />
      <div>
        <button type="button"  onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" >
          Add
        </button>
      </div>

    </form>
  );
}

export { TodoForm };
