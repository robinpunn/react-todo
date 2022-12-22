import React, {Component} from 'react';
// import './App.css';
import TextInput from './components/TextInput/TextInput.js'
import MyForm from './components/MyForm/MyForm.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>This is a todo app made with React</h1>
      </header>
      <MyForm/>
      {/*<div className="sidebar">
        <TextInput />
    </div>*/}
    </div>
  );
}

export default App;


