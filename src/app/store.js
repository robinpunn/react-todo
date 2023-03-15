import { configureStore, combineReducers } from "@reduxjs/toolkit";
import addRemoveReducer from "../features/addRemove/addRemoveSlice";
import editReducer from "../features/edit/editSlice";
import inputReducer from "../features/input/inputSlice";
import toggleCompleteReducer from "../features/toggle/toggleSlice";
import remainingTodosReducer from "../features/remaining/remainingTodosSlice";
import selectedFilterReducer from "../features/filter/filterSlice";

const rootReducer = combineReducers({
  addRemove: addRemoveReducer,
  edit: editReducer,
  input: inputReducer,
  toggleComplete: toggleCompleteReducer,
  remainingTodos: remainingTodosReducer,
  selectedFilter: selectedFilterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;