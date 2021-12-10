import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./home.css";
import { CHAT, HOME } from "../constants";

export function HomePage() {
  return (
    <Switch>
      <Route path={HOME}>
        <div className={"home-padge"}>
          <h1>Домашная страница</h1>
          <div className={"chat-link"}>
            <Link to={CHAT}>-- Чат --</Link>
          </div>
        </div>
      </Route>
    </Switch>
  );
}
