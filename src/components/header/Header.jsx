import { Link } from "react-router-dom";
import { ListItemText, Button, ListItemIcon } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { firebaseApp } from "../../api/firebase";
import styles from "./header.module.css";
import { PROFILE, CHAT, GISTS, LOGIN, SIGN_UP, HOME } from "../../constant";

const signOut = () => {
  return firebaseApp.auth().signOut();
};

export function Header({ session }) {
  return (
    <div className={styles.header}>
      <Link className={styles.headerProf} to={HOME}>
        <ListItemText className={styles.text} primary="Домашная страница" />
      </Link>
      {!!session && (
        <>
        <Link className={styles.headerProf} to={PROFILE}>
            <ListItemIcon>
              <AccountCircle fontSize="large" className={styles.icon} />
            </ListItemIcon>
            <ListItemText className={styles.text} primary="Профиль" />
          </Link>
          <Link className={styles.headerProf} to={CHAT}>
            <ListItemText className={styles.text} primary="Чат" />
          </Link>
          <Link className={styles.headerProf} to={GISTS}>
            <ListItemText className={styles.text} primary="Gists" />
          </Link>
        </>
      )}

      {!!session && <Button variant="outlined" onClick={signOut}>Выход</Button>}

      {!session && (
        <>
          <Link className={styles.headerProf} to={LOGIN}>
            <ListItemText className={styles.text} primary="Вход" />
          </Link>

          <Link className={styles.headerProf} to={SIGN_UP}>
            <ListItemText className={styles.text} primary="Регистрация" />
          </Link>
        </>
      )}
    </div>
  );
}