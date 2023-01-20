import React, {useState, useEffect} from 'react'
import uuid from 'react-uuid';
import TodoForm from '../TodoForm/TodoForm.js';
import Todo from '../Todo/Todo.js';
import Scroll from '../Scroll/Scroll';
import './TodoList.css'
import TodoFilter from '../TodoFilter/TodoFilter';

//use reach hooks to create a stateful component
const TodoList = () => {
    //create a state for the todos
    const [todos, setTodos] = useState([]);
    //create a state for remaining todos
    const [remainingTodos, setRemainingTodos] = useState(0);
    //create a state for the filter
    const [selectedFilter, setSelectedFilter] = useState('all');

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
      setRemainingTodos(newTodos.filter(todo => !todo.isCompleted).length);
      console.log(todos)
      console.log(remainingTodos)
    }

    //use effect to update the remaining todos
    useEffect(() => {
      setRemainingTodos(todos.filter(todo => !todo.isCompleted).length);
    }, [todos]);


    //render function
    return (
        <div className='container'>
            <h4 className='header'>{remainingTodos} todos left</h4>
            <TodoForm addTodo={addTodo} />
            <Scroll>
                {todos.filter(todo => {
                  if (selectedFilter === "all") {
                    return true;
                  } else if (selectedFilter === "active") {
                    return !todo.isCompleted;
                  } else {
                    return todo.isCompleted;
                  }
                }).map(todo => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  removeTodo={removeTodo}
                  toggleComplete={toggleComplete}
                />
              ))}
            </Scroll>
            <TodoFilter
              todos={todos}
              setSelectedFilter={setSelectedFilter}
              setTodos={setTodos}
            />
        </div>
    )
}

export default TodoList
