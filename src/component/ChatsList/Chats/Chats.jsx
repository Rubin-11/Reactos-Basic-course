import React from "react";
import { NavLink } from "react-router-dom";
import { Box, List, ListItemIcon, Button } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import "./Chats.css";
// import { useEffect } from "react";

export const Chats = ({ chatsList }) => {
  return (
    <>
      {chatsList.map((chat) => (
        <Box className="Chats" key={chat.id}>
          <NavLink to={`/chats/${chat.id}`}>
            <List>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={chat.name} />
              </ListItemButton>
            </List>
          </NavLink>
          <Button variant="contained">Удалить</Button>
        </Box>
      ))}
    </>
  );
};
