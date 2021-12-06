import { REMOVE_CONVERSATION } from "../types";
import { HANDLE_CHANGE_MESSAGE_VALUE, CREATE_CONVERSATION, CLEAR_MESSAGE_VALUE } from "./types";

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

const updateConversations = (state, roomId, value) =>
  state.conversations.map((conversation) => {
    return conversation.title === roomId
      ? { ...conversation, value }
      : conversation;
  });

export const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE_MESSAGE_VALUE:
      return {
        ...state,
        conversations: updateConversations(
          state,
          action.payload.roomId,
          action.payload.value
        ),
      };
    case REMOVE_CONVERSATION:
      console.log("Удаление чата");
      return {
        ...state,
        conversations: state.conversations.filter(
          (conversation) => conversation.title !== action.payload
        ),
      };

    case CREATE_CONVERSATION:
      console.log("Добавление чата");
      return {
        ...state,
        conversations: [
          ...state.conversations,
          { title: action.payload, value: "" },
        ],
      };
      case CLEAR_MESSAGE_VALUE:
      return {
        ...state,
        conversations: updateConversations(state, action.payload, ""),
      };
    default:
      return state;
  }
};
