import React from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa';
import './Todo.css'


class Todo extends React.Component {
    render() {
      const { todo, index, removeTodo,completed,handleCheckboxClick } = this.props;
      return (
        <div className={todo.completed ? 'todoCard completed' : 'todoCard'}>
            <input className='checkComplete' type="checkbox" defaultChecked={todo.completed} onChange={()=> handleCheckboxClick(index)} />
            <div className='keys'>
              {/*<h4 key={index}>{index + 1}</h4>*/}
              <p className={todo.completed ? 'completed' : ''} key={todo.index}>{todo.todo}</p>
            </div>
            <div className='editRemove'>
              <FaEdit className={todo.completed ? 'hidden' : 'editTodo'}/>
              <FaTrash className={todo.completed ? 'highlight removeTodo' : 'removeTodo'} onClick={() => removeTodo(index)}/>
            </div>
        </div>
    );
  };
}
  
export default Todo;