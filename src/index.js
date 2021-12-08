import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import { ChatPage, HomePage, ProfilePage } from "./pages";
import { GistsPage } from "./pages";
import "./global.css";
import { store, persistor } from "./store";
import { CHAT, PROFILE, HOME, ERROR, GISTS } from "./constants";
import { Header } from "./components";

const light = createTheme({
  theme: {
    color: "red",
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ThemeProvider theme={light}>
            <Header />
            <Switch>
              <Route path={CHAT}>
                <ChatPage />
              </Route>

              <Route path={PROFILE}>
                <ProfilePage />
              </Route>

              <Route path={GISTS}>
                <GistsPage />
              </Route>

              <Route path={HOME}>
                <HomePage />
              </Route>

              <Route path={ERROR}>
                <h1>404 page</h1>
                <Link to={CHAT}>go to Chat</Link>
              </Route>
            </Switch>
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
