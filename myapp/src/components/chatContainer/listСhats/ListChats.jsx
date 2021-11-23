import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";

export const ListChats = (props) => {
  return (
    <Box sx={{ width: "min-content", maxWidth: "360px" }}>
      {props.list.map((el) => (
        <List key={el.id} component="nav" aria-label="main mailbox folders">
          <ListItem disablePadding>
            <ListItemButton
              selected={props.indexElement === el.id}
              onClick={(event) => props.indexEvent(el.id)}
            >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={el.name} />
            </ListItemButton>
          </ListItem>
        </List>
      ))}
    </Box>
  );
};
