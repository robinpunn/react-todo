import { useSelector } from "react-redux";
import { selectedFilter } from "./filterSlice";

const useFilteredTodos = () => {
  const todos = useSelector((state) => state.add.todos);
  const filter = useSelector(selectedFilter);

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
