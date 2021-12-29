import { nanoid } from "nanoid";
import React, { useState } from "react";
import { Chats } from "./Chats";
import "./ChatsList.css";

export const ChatsList = () => {
  const [chatsList] = useState([
    { name: "Chat-1", id: nanoid() },
    { name: "Chat-2", id: nanoid() },
  ]);

  return (
    <div className="ChatsList">
      <Chats chatsList={chatsList} />
    </div>
  );
};
