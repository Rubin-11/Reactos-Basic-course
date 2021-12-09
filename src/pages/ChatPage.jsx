import { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { MessageList, MainTemplate, ChatList } from "../components";
import { CHAT } from "../constants";

export function ChatPage() {
  const { push } = useHistory();

  useEffect(() => {
    const listenExistChat = ({ code }) => {
      if (code === "Escape") {
        push("/chat");
      }
    };

    document.addEventListener("keydown", listenExistChat);

    return () => {
      document.removeEventListener("keydown", listenExistChat);
    };
  }, [push]);

  return (
    <Switch>
      <Route path={["/chat/:roomId", {CHAT}]}>
        <MainTemplate chats={<ChatList />}>
          <Route path="/chat/:roomId">
            <MessageList />
          </Route>
          <Route exact={true} path={CHAT}>
            <h1>Выберите диалог</h1>
          </Route>
        </MainTemplate>
      </Route>
    </Switch>
  );
}
