import { nanoid } from "nanoid";
import React, { useState } from "react";
import { Chats } from "./Chats";
import "./ChatsList.css";
import { Input, Button } from "@mui/material";

export const ChatsList = () => {
  const [chatsList, setChatList] = useState([
    { name: "Chat-1", id: nanoid() },
    { name: "Chat-2", id: nanoid() },
    { name: "Chat-3", id: nanoid() }
  ]);

  const [value, setValue] = useState("");

  const sendChat = () => {
    
    if (value) {
      setChatList((state) => [...state, { name: `${ value }`, id: nanoid() }]);
    }
    setValue("");
  };

  const sendChatButton = (event) => {
    if (event.key === "Enter") {
      sendChat();
    }
  };

  return (
    <div className="ChatsList">
      <div>
        <Input
          autoFocus={true}
          onKeyPress={sendChatButton}
          placeholder="Введите название чата"
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          sx={{ color: "white" }}
        ></Input>
        <Button variant="contained" onClick={sendChat}>Добавить чат</Button>
      </div>
      <Chats chatsList={chatsList} />
    </div>
  );
};
