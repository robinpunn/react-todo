import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todos/todosSlice";

const RemoveIcon = ({ todo }) => {
  const dispatch = useDispatch();

  const handleRemoveTodo = (todo) => {
    dispatch(deleteTodo({ id: todo.id }));

    console.log("todoID:", todo.id, todo);
  };

  const className =
    todo && todo.isCompleted ? "removeTodo highlight" : "removeTodo";

  return (
    <FaTrash
      key={todo.id}
      className={className}
      onClick={() => handleRemoveTodo(todo)}
    />
  );
};

export default RemoveIcon;
