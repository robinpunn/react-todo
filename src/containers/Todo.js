import React from "react";
import { useSelector } from "react-redux";
import EditTodo from "../features/edit/EditTodo.js";
import { EditIcon } from "../features/edit/EditIcon.js";
import RemoveIcon from "../components/RemoveIcon.js";
import ToggleComplete from "../components/ToggleComplete.js";

const Todo = ({ todo }) => {
  const { isEditing, editingTodoId } = useSelector((state) => state.edit);

  const editing = isEditing && editingTodoId === todo.id;

  //render function
  return (
    <div className={todo.isCompleted ? "completed todoCard" : "todoCard"}>
      <div className="keys">
        <ToggleComplete todo={todo} />
        {editing ? (
          <EditTodo
            todo={todo}
            // onSave={handleEditSave}
            // onCancel={handleEditCancel}
          />
        ) : (
          <p key={todo.id}>{todo.text}</p>
        )}
      </div>
      <div className="editRemove">
        <EditIcon todo={todo} />
        <RemoveIcon todo={todo} />
      </div>
    </div>
  );
};

export default Todo;
