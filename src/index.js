import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import "./index.css";
import TodoList from "./components/TodoList/TodoList";

const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TodoList />);
