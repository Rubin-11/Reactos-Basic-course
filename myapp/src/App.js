import React, {
  useState,
  useEffect,
} from 'react';
import './App.css';
import { Message } from './components/Message.js';

export function App(props) {
  const [messageList, setMessageList] = useState([
    { author: "Igor", value: "Hi" },
    { author: "Alex", value: "Hi frend"}
  ]);
  const [inputValue, setInputValue] = useState("");
  
  useEffect (() => {
    const lastMessege = messageList[messageList.length - 1];
    let timetId = null;

    if(lastMessege?.author === props.name) {
      timetId = setTimeout(() => {
        setMessageList(state => [...state, {author: `Bot`, value: `Привет`}]);
      }, 1500);
    }

    return () => clearInterval(timetId);
  },[messageList, props.name]);

  const cd = () => {
    if(inputValue) {
      setMessageList(state => [...state, { author: `${props.name}`, value: `${inputValue}`}]);
      setInputValue('');
    }
  };

  return (
    <div className="App">
        <header className="App-header">
          <div className="chatContainer">{messageList.map((message) => <p>{`${message.author}: ${message.value}`}</p>)}</div>
          <div>
            <input placeholder="input" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={cd}>send</button>
          </div>
          <Message nam={props.name}></Message>
        </header>
    </div>
  );
}

