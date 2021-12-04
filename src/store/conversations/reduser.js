import {
  HANDLE_CHANGE_MESSAGE_VALUE,
  CREATE_CONVERSATION,
  CLEAR_MESSAGE_VALUE,
} from "./types";
import { REMOVE_CONVERSATION } from "../types";

const initialState = {
  conversations: [
    {
      title: "room1",
      value: "",
    },
    {
      title: "room2",
      value: "",
    },
  ],
};

export const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE_MESSAGE_VALUE:
      return {
        ...state,
        conversations: state.conversations.map((conversation) => {
          return conversation.title === action.payload.roomId
            ? { ...conversation, value: action.payload.value }
            : conversation;
        }),
      };
    case CREATE_CONVERSATION:
      console.log(CREATE_CONVERSATION);
      return {
        ...state,
        conversations: [
          ...state.conversations,
          { title: action.payload, value: "" },
        ],
      };
    case CLEAR_MESSAGE_VALUE:
      // console.log(CLEAR_MESSAGE_VALUE);
      return {
        ...state,
        conversations: updateConversations(state, action.payload, ""),
      };
    case REMOVE_CONVERSATION:
      return {
        ...state,
        conversations: state.conversations.filter(
          (conversation) => conversation.title !== action.payload
        ),
      };
    default:
      return state;
  }
};
