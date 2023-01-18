import React from 'react';
import './TodoForm.css'

class TodoForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            todo: ''
        }
    }

  handleChange = (event) => {
    this.setState({todo: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Add the todo item to the list
    this.props.addTodo(this.state.todo);
    console.log(this.state.todo)
    // Clear the input field
    this.setState({todo: ''});
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <input
                className='inputTodo'
                type="text"
                value={this.state.todo}
                onChange={this.handleChange}
                placeholder="Enter todo..."
                autofocus={true}
            />
        </form>
    );
  }
}

export default TodoForm;