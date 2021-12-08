import { REMOVE_CONVERSATION } from "../constants";
import { SEND_MESSAGE, DELETE_MESSAGE_BY_ID } from "./constants";

const initialState = {
  messages: {
    room1: [
      {
        id: new Date().toISOString(),
        author: "Bot",
        message: "Hello from bot to room 1",
      },
    ],
  },
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      console.log("++++++++");
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: [
            ...(state.messages[action.payload.roomId] ?? []),
            { ...action.payload.message, id: new Date().toISOString() },
          ],
        },
      };

    case DELETE_MESSAGE_BY_ID:
      console.log("+++++++");
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: state.messages[action.payload.roomId].filter(
            (message) => message.id !== action.payload.messageId
          ),
        },
      };

    case REMOVE_CONVERSATION:
      // console.log("+++++++");
      return {
        ...state,
        messages: Object.entries(state.messages).reduce((acc, [key, value]) => {
          if (key === action.payload) {
            return acc;
          }

          acc[key] = value;

          return acc;
        }, {}),
      };

    default:
      return state;
  }
};
