import {
  SEND_MESSAGE,
  DELETE_MESSAGE_BY_ID,
  GET_MESSAGES_START,
  GET_MESSAGES_SUCESS,
  GET_MESSAGES_ERROR,
} from "./constants";

export const sendMessage = (message, roomId) => ({
  type: SEND_MESSAGE,
  payload: { message, roomId },
  meta: {
    delay: 500,
  },
});

export const deleteMessageById = (messageId, roomId) => ({
  type: DELETE_MESSAGE_BY_ID,
  payload: { messageId, roomId },
});

export const getMessagesStart = () => ({
  type: GET_MESSAGES_START,
});
export const getMessagesSusess = (messages) => ({
  type: GET_MESSAGES_SUCESS,
  payload: messages
});
export const getMessagesError = (error) => ({
  type:  GET_MESSAGES_ERROR,
  payload: error
});