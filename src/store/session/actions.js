import { GET_SESSION_SUCCESS, GET_SESSION_ERROR } from "./constants";

export const getSessionSuccess = (session) => ({
  type: GET_SESSION_SUCCESS,
  payload: session,
});

export const getSessionError = () => ({
  type: GET_SESSION_ERROR,
});