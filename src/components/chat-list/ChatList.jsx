import { Link, useParams } from "react-router-dom";
import { ListItemIcon, ListItemText, List } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import { Chat } from "./chat";
import {
  conversationsSelector,
  createConversation,
} from "../../store/conversations";
import { useSelector, useDispatch } from "react-redux";

export const ChatList = () => {
  const params = useParams();
  const conversations = useSelector(conversationsSelector);
  const dispatch = useDispatch();

  const createConversationByName = () => {
    const name = prompt("Введите название комнаты");

    const isValidName = !conversations.find(
      (conversation) => name === conversation.title
    );

    if (name && isValidName) {
      dispatch(createConversation(name));
    } else {
      alert("не валидная комната");
    }
  };

  return (
    <>
      <List component="nav">
        <button
          className={styles.headerProf}
          onClick={createConversationByName}
        >
          <ListItemIcon>
            <AddCircleOutline fontSize="large" className={styles.icon} />
          </ListItemIcon>
          <ListItemText className={styles.text} primary="Новый чат" />
        </button>

        {conversations.map((chat) => (
          <Link key={chat.title} to={`/chat/${chat.title}`}>
            <Chat
              title={chat.title}
              selected={chat.title === params.roomId}
            />
          </Link>
        ))}
      </List>
    </>
  );
};
