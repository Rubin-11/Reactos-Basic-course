import { ListItemIcon, ListItemText } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { PROFILE, HOME } from "../../constants";

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
    </div>
  );
};
