import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/todosSlice";
import inputReducer from "../features/input/inputSlice";
import editReducer from "../features/edit/editSlice";
import remainingTodosReducer from "../features/remaining/remainingTodosSlice";
import selectedFilterReducer from "../features/filter/filterSlice";

const rootReducer = combineReducers({
  todos: todosReducer,
  edit: editReducer,
  input: inputReducer,
  remainingTodos: remainingTodosReducer,
  selectedFilter: selectedFilterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
