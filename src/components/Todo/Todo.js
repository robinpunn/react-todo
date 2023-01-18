import React from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa';
import './Todo.css'

const Todo = ({ todo, index, removeTodo }) => {
    return (
      <div className="todoCard">
          <div className='keys'>
            {/*checkbox goes here*/}
            <p key={index}>{todo}</p>
          </div>
          <div className='editRemove'>
            <FaTrash className='removeTodo' onClick={() => removeTodo(index)}/>
          </div>
      </div>
    );
  };
  
  export default Todo;