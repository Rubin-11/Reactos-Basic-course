import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { messageSelector } from "../../store/messages";
import { sessionSelector } from "../../store/session";
import {
  messageValueSelector,
  handleChangeMessageValue,
} from "../../store/conversations";
import { Message } from "./message";
import { useStyles } from "./use-styles";
import { senMessageApi } from "../../api/messages";

export const MessageList = () => {
  const s = useStyles();
  const session = useSelector(sessionSelector);
  const { roomId } = useParams();

  const messageValue = useMemo(() => messageValueSelector(roomId), [roomId]);

  const dispatch = useDispatch();
  const value = useSelector(messageValue);

  const messages = useSelector(messageSelector(roomId));

  const handleSendMessage = () => {
    if (value) {
      dispatch(senMessageApi({ author: session.email, value }, roomId));
    }
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      <div>
        {messages.map((message, id) => (
          <Message key={message.value} message={message} />
        ))}
      </div>

      <Input
        autoFocus
        className={s.input}
        fullWidth
        placeholder="Введите сообщение..."
        value={value}
        onChange={(e) =>
          dispatch(handleChangeMessageValue(e.target.value, roomId))
        }
        onKeyPress={handlePressInput}
        endAdornment={
          <InputAdornment position="end">
            {value && <Send onClick={handleSendMessage} />}
          </InputAdornment>
        }
      />
    </>
  );
};
