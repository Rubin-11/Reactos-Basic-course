import {
  HANDLE_CHANGE_MESSAGE_VALUE,
  CREATE_CONVERSATION,
  CLEAR_MESSAGE_VALUE,
  GET_CONVERSATIONS,
  GET_CONVERSATIONS_SUCCESS,
  GET_CONVERSATIONS_ERROR,
} from "./constants";
import { REMOVE_CONVERSATION } from "../constants";

export const handleChangeMessageValue = (value, roomId) => ({
  type: HANDLE_CHANGE_MESSAGE_VALUE,
  payload: { value, roomId },
});

export const createConversation = (conversation) => ({
  type: CREATE_CONVERSATION,
  payload: conversation,
});

export const clearMessageValue = (roomId) => ({
  type: CLEAR_MESSAGE_VALUE,
  payload: roomId,
});

export const removeConversationById = (conversationId) => ({
  type: REMOVE_CONVERSATION,
  payload: conversationId,
});

export const getConversationsStart = () => ({
  type: GET_CONVERSATIONS,
});

export const getConversationsSecess = (conversations) => ({
  type: GET_CONVERSATIONS_SUCCESS,
  payload: conversations,
});

export const getConversationsError = (error) => ({
  type: GET_CONVERSATIONS_ERROR,
  payload: error,
});