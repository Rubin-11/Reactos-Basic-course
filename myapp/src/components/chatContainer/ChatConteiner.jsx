import { Box } from "@mui/material";
import { ListChats } from "./listСhats";
import { ChatWindow } from "./chatWindow";

export const ChatConteiner = (props) => {
  return (
    <Box sx={{ display: "flex", width: "min-content" }}>
      <ListChats
        list={props.pr_chatList}
        indexElement={props.pr_selectedIndex}
        indexEvent={props.pr_handleListItemClick}
      />

      <ChatWindow correspondence={props.pr_messageList} />
    </Box>
  );
};
