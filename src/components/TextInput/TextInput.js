import React from 'react';
import './TextInput.css';

class TextInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
      this.setState({
        input: event.target.value
      })
    }

    render() {
      return (
        <div className="container">
          <input className="input" value={this.state.input} onChange={this.handleChange}/>
          <h4>Type Your Todo Above</h4>
          <p>{this.state.input}</p>
        </div>
      );
    }
  };

export default TextInput;