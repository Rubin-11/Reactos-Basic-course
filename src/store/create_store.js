import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { getGistsApi, searchGistsByUserNameApi, getMessagesApi,
  senMessageApi,
  getConversationsApi, updateConversationValueApi } from "../api";
import { profileReducer } from "./profile";
import { messagesReducer } from "./messages";
import { conversationsReducer } from "./conversations";
import { gistsReducer } from "./gists";
import { sessionReducer } from "./session";
import {
  logger,
  botSendMessage,
  timeScheduler,
  crashReporter,
} from "./middlewares";

const persistConfig = {
  key: "root",
  storage,
  // blacklist: ["messages"],
  whitelist: ["profile"],
};

export const reducer = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
  conversations: conversationsReducer,
  gists: gistsReducer,
  session: sessionReducer,
});

const persistreducer = persistReducer(persistConfig, reducer);

export const store = createStore(
  persistreducer,
  compose(
    applyMiddleware(
      timeScheduler,
      crashReporter,
      botSendMessage,
      thunk.withExtraArgument({ getGistsApi, searchGistsByUserNameApi, getMessagesApi,
        senMessageApi,
        getConversationsApi, updateConversationValueApi, }),
      logger,
      botSendMessage
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export const persistor = persistStore(store);
