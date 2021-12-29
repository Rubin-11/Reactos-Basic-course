import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";
import { Message } from "./Message";
import "./MessageList.css";
import { Input, Button } from "@mui/material";

export const MessageList = (props) => {
  const [messageList, setMessageList] = useState([
    { text: "Привет всем!!!", author: "Иван", id: nanoid() },
    { text: "Привет, как у вас дела?", author: "Александр", id: nanoid() },
  ]);

  const [value, setValue] = useState("");

  const sendMessage = () => {
    if (value) {
      setMessageList((state) => [
        ...state,
        { text: `${value}`, author: "user", id: nanoid() },
      ]);
    }
    setValue("");
  };

  const sendMessageButton = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    const lastMessage = messageList[messageList.length - 1];
    if (lastMessage.author === "user") {
      let ref = null;
      ref = setTimeout(() => {
        setMessageList((state) => [
          ...state,
          { text: "Привет я бот!!!", author: "Bot", id: nanoid() },
        ]);
      }, 1500);
      return () => clearTimeout(ref);
    }
  }, [messageList]);

  return (
    <div className="MessageList">
      <Message className={"Message"} messageList={messageList} />
      <div>
        <Input
          autoFocus={true}
          placeholder="Введите сообщение"
          type="text"
          value={value}
          onKeyPress={sendMessageButton}
          onChange={(event) => setValue(event.target.value)}
          sx={{ color: "white" }}
        />
        <Button variant="contained" onClick={sendMessage}>Отправить</Button>
      </div>
    </div>
  );
};
