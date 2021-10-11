import React, {
  useState,
  useEffect,
} from 'react';
import './App.css';
import { Message } from './components/Message.js';

export function App(props) {
  const [messageList, setMessageList] = useState([
    { author: "Igor", message: "Hi" },
    { author: "Alex", message: "Hi frend"}
  ]);
  const [inputValue, setInputValue] = useState("");
  
  useEffect (() => {
    let i = [messageList.length - 1];
    if(messageList[i].author === props.name) {
      setTimeout(() => {
        setMessageList(messageList => [...messageList, messageList={author: `Bot`, message: `Привет`}]);
      }, 1500);
    }
  },[messageList,props.name]);

  const cd = () => {
    setMessageList(messageList => [...messageList, messageList={author: `${props.name}`,message: `${inputValue}`}]);
    setInputValue('');
  };

  return (
    <div className="App">
        <header className="App-header">
          <div>{messageList.map((message) => <p>{`${message.author}: ${message.message}`}</p>)}</div>
          <div>
            <input placeholder="input" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={cd}>send</button>
          </div>
          <Message nam={props.name}></Message>
        </header>
    </div>
  );
}

