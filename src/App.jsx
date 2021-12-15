import React from "react";
import "./App.css";
import { Message } from "./component/Message";

export function App({ name }) {
  return (
    <>
      <div className="App">
        <header className="App-header">
          My First React App
          <Message name={name} />
        </header>
      </div>
      <Message name={name} />
    </>
  );
}
