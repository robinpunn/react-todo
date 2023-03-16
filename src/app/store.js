import { configureStore, combineReducers } from "@reduxjs/toolkit";
import addInputReducer from "../features/input/addInputSlice";
import editReducer from "../features/edit/editSlice";
import removeReducer from "../features/remove/removeSlice";
import toggleCompleteReducer from "../features/toggle/toggleSlice";
import remainingTodosReducer from "../features/remaining/remainingTodosSlice";
import selectedFilterReducer from "../features/filter/filterSlice";

const rootReducer = combineReducers({
  addInput: addInputReducer,
  edit: editReducer,
  remove: removeReducer,
  toggleComplete: toggleCompleteReducer,
  remainingTodos: remainingTodosReducer,
  selectedFilter: selectedFilterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
