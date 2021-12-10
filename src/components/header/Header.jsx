import { Button, ListItemIcon, ListItemText } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { firebaseApp } from "../../api/firebase";
import { PROFILE, HOME, CHAT, GISTS, LOGIN, SIGN_UP } from "../../constants";

const exist = () => {
  firebaseApp.auth().signOut();
};

export const Header = ({ session }) => {
  const isAuth = !!session?.email;
  return (
    <div className={styles.header}>
      {isAuth && (
        <>
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
        </>
      )}
      {!isAuth && (
        <>
          <Link className={styles.headerProf} to={LOGIN}>
            <ListItemText className={styles.text} primary="login" />
          </Link>

          <Link className={styles.headerProf} to={SIGN_UP}>
            <ListItemText className={styles.text} primary="sign-up" />
          </Link>
        </>
      )}
      <>
        <Button onClick={exist}>Выход</Button>
        <h1 style={{ color: "#fff" }}>{session?.email ?? ""}</h1>
      </>
    </div>
  );
};
