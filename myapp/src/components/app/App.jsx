import React, { useState, useEffect } from "react";
import "./css/App.css";
import { ChatConteiner } from "../chatContainer";
import { Message } from "../message";

import { Input, InputAdornment } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Send } from "@mui/icons-material";
import { nanoid } from "nanoid";

const useStyles = makeStyles(() => {
  return {
    input: {
      color: "#ff0000",
      padding: "10px 15px",
    },
  };
});

export function App(props) {
  const s = useStyles();

  const [messageList, setMessageList] = useState([
    { id: nanoid(), author: "Игорь", value: "Привет" },
    { id: nanoid(), author: "Алексей", value: "Привет, давно не виделись!!!" },
  ]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const lastMessAge = messageList[messageList.length - 1];
    let timetId = null;
    if (lastMessAge?.author === props.name) {
      timetId = setTimeout(() => {
        setMessageList((state) => [
          ...state,
          { id: nanoid(), author: `Бот`, value: `Добро пожаловать в чат` },
        ]);
      }, 1500);
    }
    return () => clearInterval(timetId);
  }, [messageList, props.name]);

  const cd = () => {
    if (message) {
      setMessageList((state) => [
        ...state,
        { id: `${nanoid()}`, author: `${props.name}`, value: `${message}` },
      ]);
      setMessage("");
    }
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter" && message) {
      cd();
    }
  };

  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  const [chatList] = useState([
    { id: nanoid(), name: "Домашний" },
    { id: nanoid(), name: "Рабочий" },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <ChatConteiner
          pr_chatList={chatList}
          pr_selectedIndex={selectedIndex}
          pr_handleListItemClick={handleListItemClick}
          pr_messageList={messageList}
        />

        <Input
          sx={{ color: "white" }}
          autoFocus={true}
          className={s.input}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handlePressInput}
          fullWidth={true}
          endAdornment={
            <InputAdornment
              position="end"
              sx={{ color: "white", cursor: "pointer" }}
            >
              {message && <Send className="icon" onClick={cd} />}
            </InputAdornment>
          }
        />
        <Message nam={props.name} />
      </header>
    </div>
  );
}
