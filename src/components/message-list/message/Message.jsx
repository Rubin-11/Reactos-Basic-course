// import { format } from "date-fns";
import classNames from "classnames";
import { withCounter } from "../../../hocs/with-counter";
import { deleteMessageById } from "../../../store/messages";
import styles from "./message.module.css";

export const Message = withCounter(
  ({ message, increment, decrement, count, dispatch, roomId }) => {
    return (
      <div
        className={classNames(styles.message, {
          [styles.currentMessage]: message.author !== "Bot",
        })}
      >
        <h3>{message.message}</h3>
        <p>{message.author}</p>
        <button onClick={() => dispatch(deleteMessageById(message.id, roomId))}>
          X
        </button>
      </div>
    );
  }
);
