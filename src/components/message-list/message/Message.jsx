import { format } from "date-fns";
import { memo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useSelector } from "react-redux";
import styles from "./message.module.css";
import { sessionSelector } from "../../../store/session";



export const Message = memo(({ message }) => {
  const { author, value } = message;
  const session = useSelector(sessionSelector);

  return (
    <div
      className={classNames(styles.message, {
        [styles.currentMessage]: author === session.email,
      })}
    >
      <h3>{value}</h3>
      <p>{author}</p>
      <p>{format(new Date(), "yyyy-MM-dd")}</p>
      <hr />
    </div>
  );
});

Message.propTypes = {
  message: PropTypes.shape({
    author: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  test: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
};