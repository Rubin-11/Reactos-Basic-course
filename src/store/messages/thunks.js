import { clearMessageValue } from "../conversations";
import { sendMessage } from "./actions";

export const sendMessageWithBot = (message, roomId) => (dispatch, getState) => {
  dispatch(sendMessage(message, roomId));
  dispatch(clearMessageValue(roomId));
};
