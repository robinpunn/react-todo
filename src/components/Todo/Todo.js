import React from 'react'
import './Todo.css'

const Todo = ({ todo, index, removeTodo }) => {
    return (
      <div className="todoCard">
          <div className='keys'>
            <h4 key={index}>{index + 1}</h4>
            <p key={todo}>{todo}</p>
          </div>
          <button onClick={() => removeTodo(index)}>Remove Todo</button>
      </div>
    );
  };
  
  export default Todo;