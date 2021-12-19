import React, { useState } from "react";
import { Message } from "./Message";

export const MessageList = (props) => {
  
  const [messageList, setMessageList] = useState([
    { text: "Привет всем!!!", author: "Иван" },
    { text: "Привет, как у вас дела?", author: "Александр" },
  ]);

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="MessageList">
      <Message messageList = {messageList} />
      <input type="text" value={value} onChange={handleChange} />
      <button>Отправить</button>
    </div>
  );
};
