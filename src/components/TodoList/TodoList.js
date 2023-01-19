import React from 'react'
import uuid from 'react-uuid';
import TodoForm from '../TodoForm/TodoForm.js';
import Todo from '../Todo/Todo.js';
import Scroll from '../Scroll/Scroll';
import './TodoList.css'

//use reach hooks to create a stateful component
const TodoList = () => {
    //create a state for the todos
    const [todos, setTodos] = React.useState([]);

    //create a function to add a todo, new todo should be on top of the list
    const addTodo = (text) => {
        const newTodos = [...todos, { id: uuid().slice(0,4), text, isCompleted: false }];
        setTodos(newTodos);
        console.log(todos)
    }

    //create a function to remove a todo
    const removeTodo = (id) => {
        const newTodos = [...todos].filter(todo => todo.id !== id);
        setTodos(newTodos);
    }

    //create a function to toggle a todo to complete or not complete
    const toggleComplete = (id) => {
      const newTodos = todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
      setTodos(newTodos);
      console.log(todos)
    }

    //todo list is not rendering, and I don't know why

    //render function
    return (
        <div className='container'>
            <h4 className='header'>{todos.length} todos left</h4>
            <TodoForm addTodo={addTodo} />
            <Scroll>
                {todos.map(todo => (
                    <Todo
                      key={todo.id}
                      todo={todo}
                      removeTodo={removeTodo}
                      toggleComplete={toggleComplete}
                    />
                ))}
            </Scroll>
        </div>
    )
}

export default TodoList
