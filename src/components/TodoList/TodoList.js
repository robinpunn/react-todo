import React from 'react'
import TodoForm from '../TodoForm/TodoForm.js';
import Todo from '../Todo/Todo.js';
import Scroll from '../Scroll/Scroll';
import './TodoList.css'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  addTodo = (todo) => {
    this.setState({ todos: [...this.state.todos, todo] });
    console.log(this.state.todos)
  }


  removeTodo = (index) => {
    const updatedTodos = [...this.state.todos];
    updatedTodos.splice(index, 1);
    this.setState({
        todos: updatedTodos
    });
  }


  render() {
    return (
      <div>
        <header className="header">
          <h4>You have {this.state.todos.length} todos</h4>
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
