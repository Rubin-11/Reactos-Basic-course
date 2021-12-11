import React, { useEffect, useState } from "react";
import { PersistGate } from "redux-persist/integration/react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, PublicRoute, PrivateRoute } from "./components";
import { ChatPage, ProfilePage, Gists, LoginPage, SignUpPage } from "./pages";
import { CustomThemeProvider } from "./theme-context";
import { store, persistor } from "./store";
import { firebaseApp } from "./api/firebase";
import "./palette.css";
import "./global.css";
import { PROFILE, GISTS, LOGIN, SIGN_UP, HOME } from "./constant";

const App = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
  
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        setSession(user);
      } else {
        setSession(null);
      }
    });
  }, []);

  const isAuth = session?.email;

  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <CustomThemeProvider>
            <BrowserRouter>
              <Header session={session} />
              <Routes>
                <Route path={HOME} element={<h1>Home Page</h1>} />
                <Route
                  path="/chat/*"
                  element={
                    <PrivateRoute isAuth={isAuth} to={LOGIN}>
                      <ChatPage session={session} />
                    </PrivateRoute>
                  }
                />
                <Route
                  path={PROFILE}
                  element={
                    <PrivateRoute isAuth={isAuth}>
                      <ProfilePage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path={GISTS}
                  element={
                    <PrivateRoute isAuth={isAuth}>
                      <Gists />
                    </PrivateRoute>
                  }
                />
                <Route
                  path={LOGIN}
                  element={
                    <PublicRoute isAuth={isAuth}>
                      <LoginPage />
                    </PublicRoute>
                  }
                />
                <Route
                  path={SIGN_UP}
                  element={
                    <PublicRoute isAuth={isAuth}>
                      <SignUpPage />
                    </PublicRoute>
                  }
                />
              </Routes>
            </BrowserRouter>
          </CustomThemeProvider>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
