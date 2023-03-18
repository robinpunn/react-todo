import { useSelector } from "react-redux";

export const useFilteredTodos = () => {
  const todos = useSelector((state) => state.todos.todos);
  const filter = useSelector((state) => state.selectedFilter.selectedFilter);

  return todos.filter((todo) => {
    if (filter === "all") {
      return true;
    } else if (filter === "active") {
      return !todo.isCompleted;
    } else {
      return todo.isCompleted;
    }
  });
};

export const useAllTodos = () => {
  const todos = useSelector((state) => state.todos.todos);

  return todos;
};
