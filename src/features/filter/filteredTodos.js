import { useSelector } from "react-redux";

const useFilteredTodos = () => {
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

export default useFilteredTodos;
