import React from 'react';
import './TodoForm.css'

class TodoForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            todo: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
  handleChange(event) {
    this.setState({todo: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    // Add the todo item to the list
    this.props.addTodo(this.state.todo);
    console.log(this.state.todo)
    // Clear the input field
    this.setState({todo: ''});
  }

  render() {
    return (
        <form className='container' onSubmit={this.handleSubmit}>
            <h4 className='directions'>Type your todo below</h4>
            <input
                className='input'
                type="text"
                value={this.state.todo}
                onChange={this.handleChange}
            />
            <button
                className='submit'
                type="submit"
            >
                Add Todo
            </button>
        </form>
    );
  }
}

export default TodoForm;
