import React from 'react';

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        submit: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleH1Click = this.handleH1Click.bind(this)
    }

    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }

    handleSubmit(event) {
      event.preventDefault()
      const h1 = document.createElement('h1')
      h1.innerText = this.state.input
      h1.addEventListener('click',this.handleH1Click)
      document.getElementById('sidebar').appendChild(h1)
    //   this.setState({
    //       submit: this.state.input
    //   })
    }

    handleH1Click(event) {
        this.setState({
            h1Text: event.target.innerText
        })
    }

    render() {
      return (
        <div>
            <div id="sidebar" style={{position: 'fixed', overflow: 'scroll', width: '200px', height: '100%'}} />
            <div style={{position: 'fixed', bottom: '0', width: '100%'}}>
                <form onSubmit={this.handleSubmit}>
                <input value={this.state.input} onChange={this.handleChange}/>
                <button type='submit'>Submit!</button>
                </form>
            </div>
            <div style={{textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                {this.state.h1Text}
            </div>
          {/*<form onSubmit={this.handleSubmit}>
            <input value={this.state.input} onChange={this.handleChange}/>
            <button type='submit'>Submit!</button>
          </form>
          <h1>{this.state.submit}</h1>*/}
        </div>
      );
    }
  }

export default MyForm;