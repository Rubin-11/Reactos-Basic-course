import { ListItemIcon, ListItemText } from "@mui/material";
import { AccountCircle, AddCircleOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

export const Header = ({ createConversation }) => {
  return (
    <div className={styles.header}>
      <Link className={styles.headerProf} to="/profile">
        <ListItemIcon>
          <AccountCircle fontSize="large" className={styles.icon} />
        </ListItemIcon>
        <ListItemText className={styles.text} primary="Профиль" />
      </Link>
      <button className={styles.headerProf} onClick={createConversation}>
        <ListItemIcon>
          <AddCircleOutline fontSize="large" className={styles.icon} />
        </ListItemIcon>
        <ListItemText className={styles.text} primary="Новый чат" />
      </button>
      <Link className={styles.headerProf} to="/">
        <ListItemText className={styles.text} primary="Домашная страница" />
      </Link>
    </div>
  );
};
