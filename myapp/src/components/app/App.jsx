import React, { useState, useEffect } from 'react';
import './css/App.css';
import { Message } from '../message';

export function App(props) {
  const [messageList, setMessageList] = useState([
    { author: "Игорь", value: "Привет" },
    { author: "Алексей", value: "Привет друг!!!"}
  ]);
  const [inputValue, setInputValue] = useState("");
  
  useEffect (() => {
    const lastMessege = messageList[messageList.length - 1];
    let timetId = null;

    if(lastMessege?.author === props.name) {
      timetId = setTimeout(() => {
        setMessageList(state => [...state, {author: `Бот`, value: `Привет`}]);
      }, 1500);
    }

    return () => clearInterval(timetId);
  },[messageList, props.name]);

  const sendMessage = () => {
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
            <input placeholder="Введите сообщение" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={sendMessage}>Отправить</button>
          </div>
          <Message nam={props.name}/>
        </header>
    </div>
  );
}

