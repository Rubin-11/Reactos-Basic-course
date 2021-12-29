import React from "react";
import "./App.css";
import { MessageList, ChatsList, Header } from "./component";

export function App({ name }) {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <main className="App-main">
          <ChatsList />
          <MessageList />
        </main>
      </div>
    </>
  );
}
