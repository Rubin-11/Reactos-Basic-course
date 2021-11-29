import { useCallback } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox, Box, ListItemText } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { exampleAction } from "../store/profile";
import styles from "./header.module.css";

export function ProfilePage() {
  const { showName, name } = useSelector((state) => state);
  const dispatch = useDispatch();
  const setShowName = useCallback(() => {
    dispatch(exampleAction);
  }, [dispatch]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#162b3b",
      }}
    >
      <Avatar src="/broken-image.jpg" />
      <h4>Профиль</h4>
      <Checkbox
        checked={showName}
        onChange={setShowName}
        value={showName}
        inputProps={{ "aria-label": "controlled" }}
      />
      <span>Показать имя</span>
      {showName && <div>{name}</div>}
      <Link className={styles.headerProf} to="/">
        <ListItemText className={styles.text} primary="Домашная страница" />
      </Link>
    </Box>
  );
}
