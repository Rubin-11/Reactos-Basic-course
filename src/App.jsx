import React from "react";
import "./App.css";
import { MessageList } from "./component";

export function App({ name }) {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <MessageList />
        </header>
      </div>
    </>
  );
}
