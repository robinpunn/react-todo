import React from 'react'
import TodoForm from '../TodoForm/TodoForm.js';
import Todo from '../Todo/Todo.js';
import Scroll from '../Scroll/Scroll';
import './TodoList.css'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.addTodo = this.addTodo.bind(this);
    this.handleCheckboxClick = this.handleCheckboxClick.bind(this)
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todo) {
    this.setState({ todos: [...this.state.todos, {todo,completed:false, index: this.state.todos.length}] });
    console.log(this.state.todos)
  }

  handleCheckboxClick(index) {
    this.setState(prevState => {
      const newTodos = [...prevState.todos]
      newTodos[index].completed = !newTodos[index].completed
      console.log('newTodosChecked:',newTodos)
      return {todos: newTodos}
    })
    console.log('it worked')
  }

  removeTodo(index) {
    this.setState(prevState => {
      const newTodos = prevState.todos.filter((t,i) => i !==index)
      newTodos = newTodos.filter((t) => t.index !== -1)
      console.log('newTodosRemoved:', newTodos)
      return {todos: newTodos}
    })
  }


  render() {
    return (
      <div className='container'>
        <header className="header">
          <h2>You have {this.state.todos.length} todos</h2>
        </header>
        <TodoForm addTodo={this.addTodo} />
        <Scroll>
          {this.state.todos.map((todo,index) => {
              return <Todo todo={todo.todo} index={todo.index} removeTodo={this.removeTodo} handleCheckboxClick={this.handleCheckboxClick} completed={todo.completed}/>
          })}
        </Scroll>
      </div>
    );
  }
}

export default TodoList