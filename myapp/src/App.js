import React from 'react';
import './App.css';
import { Message } from './components/Message.js';


export function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Message nam={props.name}></Message>
      </header>
    </div>
  );
}






