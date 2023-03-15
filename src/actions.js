import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_COMPLETE,
  EDIT_TODO,
  INPUT,
  SET_EDITING,
  UPDATE_EDITED_TEXT,
  REMAINING_TODOS,
  SELECTED_FILTER,
} from "./constants";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: { id },
  };
};

export const toggleComplete = (id) => {
  return {
    type: TOGGLE_COMPLETE,
    payload: { id },
  };
};

export const editTodo = (id, text) => {
  return {
    type: EDIT_TODO,
    payload: { id, text },
  };
};

export const setEditing = (isEditing) => {
  return {
    type: SET_EDITING,
    payload: isEditing,
  };
};

export const updateEditedText = (text) => {
  return {
    type: UPDATE_EDITED_TEXT,
    payload: text,
  };
};

export const input = (text) => {
  return {
    type: INPUT,
    payload: { text },
  };
};

export const remainingTodos = (todos) => {
  return {
    type: REMAINING_TODOS,
    payload: todos,
  };
};

export const selectedFilter = (filter) => {
  return {
    type: SELECTED_FILTER,
    payload: filter,
  };
};
