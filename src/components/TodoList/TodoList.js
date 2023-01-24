import React, {useState, useEffect} from 'react'
import uuid from 'react-uuid';
import TodoForm from '../TodoForm/TodoForm.js';
import Todo from '../Todo/Todo.js';
import Scroll from '../Scroll/Scroll';
import './TodoList.css'
import TodoFilter from '../TodoFilter/TodoFilter';
import Clear from '../Clear/Clear.js';

//use reach hooks to create a stateful component
const TodoList = () => {
    //create a state for the todos
    const [todos, setTodos] = useState(() => {
      // Check if there are any saved todos in local storage
      const savedTodos = localStorage.getItem('todos');
      // If there are, return the saved todos
      if (savedTodos) {
        try {
          return JSON.parse(savedTodos);
        } catch (err) {
          console.error(err);
          localStorage.removeItem("todos");
        }
      }
      // If there aren't, return an empty array
      return [];
    });
    //create a state for remaining todos
    const [remainingTodos, setRemainingTodos] = useState(0);
    //create a state for the filter
    const [selectedFilter, setSelectedFilter] = useState('all');

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

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

    //create a function to clear all todos
    const clearTodos = () => {
      setTodos([]);
      localStorage.removeItem('todos')
      // focus on the input
      document.querySelector('.todo-input').focus();
    }

    //use effect to update the remaining todos
    useEffect(() => {
      setRemainingTodos(todos.filter(todo => !todo.isCompleted).length);
    }, [todos]);

    //message to show when there is no todo
    const message = (
      <div className='message'>
        {selectedFilter === "all" ? (
          <p className='none'>Enter a todo...</p>
        ) :
          selectedFilter === "active" ? (
            <p className='none'>You dont have any active todos...</p>
        ) :
          selectedFilter === "complete" ? (
            <p className='none'>You haven't completed any todos...</p>
        ) : null}
      </div>
    )

    //render function
    return (
        <div className='container'>
            <h4 className='header'>{remainingTodos} todos left</h4>
            <TodoForm addTodo={addTodo} />
            <TodoFilter
              todos={todos}
              setSelectedFilter={setSelectedFilter}
              setTodos={setTodos}
            />
            <Scroll>
              {todos.filter(todo => {
                  if (selectedFilter === "all") {
                    console.log("selectedFilter is all");
                    return true;
                  } else if (selectedFilter === "active") {
                    console.log("selectedFilter is active");
                    return !todo.isCompleted;
                  } else {
                    console.log("selectedFilter is complete");
                    return todo.isCompleted;
                  }
                  }).length ?
                    todos.filter(todo => {
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
                  )) :
                    message
              }
            </Scroll>
            <Clear clearTodos={clearTodos}/>
        </div>
    )
}

export default TodoList
