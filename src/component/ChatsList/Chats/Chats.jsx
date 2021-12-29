import React from "react";
import { Box, List, ListItemIcon } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export const Chats = ({ chatsList }) => {
  return chatsList.map((chat) => (
    <Box key={chat.id}>
      <List>
        <ListItemButton>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={chat.name} />
        </ListItemButton>
      </List>
    </Box>
  ));
};
