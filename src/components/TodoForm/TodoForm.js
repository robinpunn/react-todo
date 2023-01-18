  import React from 'react';
  import './TodoForm.css'

  class TodoForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = { todo: { todo: '', completed: false }}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }



    handleChange(event) {
      // set state of todo
      this.setState({ todo: { todo: event.target.value, completed: false } });
    }

    handleSubmit(event) {
      // prevent refresh after submit
      event.preventDefault();
      // Add the todo item to the list
      if  (this.state.todo.todo.length > 0) {
        this.props.addTodo(this.state.todo);
      }
      // Clear the input field
      this.setState({ todo: { todo: '', completed: false } })
    }

    handleKeyPress(event) {
      if (event.keyCode === 13 && this.state.todo.todo.length > 0) {
          this.handleSubmit(event);
      }
  }

    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
              <input
                  className='inputTodo'
                  type="text"
                  value={this.state.todo.todo}
                  onChange={this.handleChange}
                  onKeyPress={this.handleKeyPress}
                  placeholder="Enter todo..."
                  autoFocus
              />
          </form>
        </div>
      );
    }
  }

  export default TodoForm;
