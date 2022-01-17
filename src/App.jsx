import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { Router } from "./Router";
import { store } from "./store";

export function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
