import { ListItemIcon, ListItemText } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { PROFILE, HOME, CHAT, GISTS } from "../../constants";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Link className={styles.headerProf} to={PROFILE}>
        <ListItemIcon>
          <AccountCircle fontSize="large" className={styles.icon} />
        </ListItemIcon>
        <ListItemText className={styles.text} primary="Профиль" />
      </Link>

      <Link className={styles.headerProf} to={HOME}>
        <ListItemText className={styles.text} primary="Домашная страница" />
      </Link>

      <Link className={styles.headerProf} to={CHAT}>
        <ListItemText className={styles.text} primary="Чат" />
      </Link>

      <Link className={styles.headerProf} to={GISTS}>
        <ListItemText className={styles.text} primary="Gists" />
      </Link>
    </div>
  );
};
