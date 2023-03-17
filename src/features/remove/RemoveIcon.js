import React from "react";
import { FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "./removeSlice";
import { addTodo } from "../input/addInputSlice";

const RemoveIcon = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.addInput.todos);
  const remove = useSelector((state) => state.remove);

  const handleRemoveTodo = () => {
    if (remove) {
      dispatch(removeTodo({ id: remove.id }));
      dispatch(addTodo({ todos: remove.todos }));
    }
    console.log(remove, todo, "works");
  };

  const className =
    todo && todo.isCompleted ? "removeTodo highlight" : "removeTodo";

  return <FaTrash className={className} onClick={handleRemoveTodo} />;
};

export default RemoveIcon;
