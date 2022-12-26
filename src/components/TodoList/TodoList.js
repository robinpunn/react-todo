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
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todo) {
    this.setState({ todos: [...this.state.todos, todo] });
    console.log(this.state.todos)
  }

  removeTodo(index) {
    this.setState({todos: this.state.todos.filter((t,i) => i !== index)})
  }

  render() {
    return (
      <div>
        <header className="header">
          <h1>You have {this.state.todos.length} todos</h1>
        </header>
        <TodoForm addTodo={this.addTodo} />
        <Scroll>
        {this.state.todos.map((todo,index) => {
            return <Todo todo={todo} index={index} removeTodo={this.removeTodo}/>
        })}
        </Scroll>
      </div>
    );
  }
}

export default TodoList