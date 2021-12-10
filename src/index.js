import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material";
import React, { useEffect } from "react";
import {
  ChatPage,
  HomePage,
  ProfilePage,
  LoginPage,
  SignUpPage,
} from "./pages";
import { GistsPage } from "./pages";
import "./global.css";
import { store, persistor } from "./store";
import { CHAT, PROFILE, HOME, ERROR, GISTS, LOGIN, SIGN_UP } from "./constants";
import { Header, PrivateRoute, PublicRoute } from "./components";
import { sessionSelector, onAuthStateChanged } from "./store/session";
import { getMessagesFB } from "./store/messages";
import { getConversationsFB } from "./store/conversations";

const light = createTheme({
  theme: {
    color: "red",
  },
});

const App = () => {
  const session = useSelector(sessionSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onAuthStateChanged());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getMessagesFB());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getConversationsFB());
  }, [dispatch]);

  const isAuth = !!session?.email;

  return (
    <>
      <Header session={session} />

      <Switch>
        <PrivateRoute path={CHAT} isAuth={isAuth}>
          <ChatPage />
        </PrivateRoute>
        <PrivateRoute path={PROFILE} isAuth={isAuth}>
          <ProfilePage />
        </PrivateRoute>
        <PrivateRoute path={GISTS} isAuth={isAuth}>
          <GistsPage />
        </PrivateRoute>

        <PublicRoute path={LOGIN} isAuth={isAuth} to="/chat">
          <LoginPage />
        </PublicRoute>
        <PublicRoute path={SIGN_UP} isAuth={isAuth} to="/chat">
          <SignUpPage />
        </PublicRoute>

        <Route path={HOME}>
          <HomePage />
        </Route>

        <Route path={ERROR}>
          <h1>404 page</h1>
          <Link to={CHAT}>go to Chat</Link>
        </Route>
      </Switch>
    </>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <ThemeProvider theme={light}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
