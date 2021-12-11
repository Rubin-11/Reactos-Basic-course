import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { List, Button } from "@mui/material";
import {
  conversationsSelector,
  createConversation,
} from "../../store/conversations";
import { Chat } from "./chat";

export const ChatList = () => {
  const { roomId } = useParams();
  const conversations = useSelector(conversationsSelector);

  const dispatch = useDispatch();

  const createConversationByName = () => {
    const name = prompt("Введите название комнаты");

    const isValidName = !conversations.includes(name);

    if (name && isValidName) {
      dispatch(createConversation(name));
    } else {
      alert("не валидная комната");
    }
  };

  return (
    <List component="nav">
      <Button  onClick={createConversationByName}>Добавить чат</Button>
      {conversations.map((chat) => (
        <Link key={chat.title} to={`/chat/${chat.title}`}>
          <Chat
            title={chat.title}
            selected={chat.title === roomId}
            dispatch={dispatch}
          />
        </Link>
      ))}
    </List>
  );
};
