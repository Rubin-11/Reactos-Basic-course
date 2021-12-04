import { Button, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { format } from "date-fns";
import { removeConversationById } from "../../../store/conversations";
import styles from "./chat.module.css";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => {
  return {
    item: {
      "&.Mui-selected": {
        backgroundColor: "#2b5278",
      },
      "&.Mui-selected:hover": {
        backgroundColor: "#2b5278",
      },
    },
  };
});

export function Chat({ title, selected, handleListItemClick }) {
  const s = useStyles();
  const dispatch = useDispatch();

  return (
    <ListItem
      className={s.item}
      button={true}
      selected={selected}
      onClick={handleListItemClick}
    >
      <ListItemIcon>
        <AccountCircle fontSize="large" className={styles.icon} />
      </ListItemIcon>
      <div className={styles.description}>
        <ListItemText className={styles.text} primary={title} />
        <ListItemText className={styles.text} primary={format(new Date(), "yyyy-MM-dd")} />
      </div>
      <Button style={{backgroundColor: "#200772"}} onClick={() => dispatch(removeConversationById(title))}>+</Button>
    </ListItem>
  );
}
