import React, { useState } from "react";
import EditTodo from "../features/edit/EditTodo.js";
import { EditIcon } from "../features/edit/EditIcon.js";
import RemoveIcon from "../features/remove/RemoveIcon.js";
import ToggleComplete from "../features/toggle/ToggleComplete.js";

const Todo = ({ todo, removeTodo, toggleComplete }) => {
  //create a state for the edit
  const [editing, setEditing] = useState(false);

  //create a function to handle the edit
  const handleEditSave = (newText) => {
    setEditing(true);
    todo.text = newText;
    //if button is clicked again, set editing to false
    setEditing(false);
  };

  //handle edit cancel
  const handleEditCancel = () => {
    setEditing(false);
  };

  //render function
  return (
    <div className={todo.isCompleted ? "completed todoCard" : "todoCard"}>
      <div className="keys">
        <ToggleComplete toggleComplete={toggleComplete} todo={todo} />
        {editing ? (
          <EditTodo
            text={todo.text}
            onSave={handleEditSave}
            onCancel={handleEditCancel}
          />
        ) : (
          <p key={todo.id}>{todo.text}</p>
        )}
      </div>
      <div className="editRemove">
        <EditIcon todo={todo} setEditing={setEditing} />
        <RemoveIcon todo={todo} removeTodo={removeTodo} />
      </div>
    </div>
  );
};

export default Todo;
