import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_COMPLETE,
  EDIT_TODO,
  INPUT,
  SET_EDITING,
  UPDATE_EDITED_TEXT,
  REMAINING_TODOS,
} from "./constants";
import uuid from "react-uuid";

const initialState = {
  todos: [],
  selectedFilter: "all",
  remainingTodos: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: uuid().slice(0, 4),
        text: action.payload.text,
        isCompleted: false,
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        ),
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
        editingTodoId: null,
      };
    case SET_EDITING:
      const editedTodo = state.todos.find((todo) => todo.id === action.payload);
      return {
        ...state,
        editingTodoId: action.payload,
        editedText: editedTodo ? editedTodo.text : "",
      };
    case UPDATE_EDITED_TEXT:
      return {
        ...state,
        editedText: action.payload,
      };
    case INPUT:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
      };
    case REMAINING_TODOS:
      return {
        ...state,
        remainingTodos: state.todos.filter((todo) => !todo.isCompleted).length,
      };
    case SELECTED_FILTER:
      return {
        ...state,
        selectedFilter: action.payload,
      };
    default:
      return state;
  }
};
