import { REMOVE_CONVERSATION } from "../constants";
import {
  HANDLE_CHANGE_MESSAGE_VALUE,
  CREATE_CONVERSATION,
  CLEAR_MESSAGE_VALUE,
  GET_CONVERSATIONS,
  GET_CONVERSATIONS_SUCCESS,
  GET_CONVERSATIONS_ERROR,
} from "./constants";

const initialState = {
  conversations: [],
  conversationsLoading: false,
  conversationsError: null,
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
    case GET_CONVERSATIONS:
      return { ...state, conversationsLoading: true, };

    case GET_CONVERSATIONS_SUCCESS:
      return {
        ...state,
        conversationsLoading: false,
        conversations: action.payload,
      };

    case GET_CONVERSATIONS_ERROR:
      return {
        ...state,
        conversationsLoading: false,
        conversationsError: action.payload,
      };
    default:
      return state;
  }
};
