import { SEND_MESSAGE, DELETE_MESSAGE_BY_ID } from "./constants";

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

