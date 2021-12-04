import classNames from "classnames";
import { withCounter } from "../../../hocs/WithCounter";
import styles from "./message.module.css";
import { format } from "date-fns";

export const Message = withCounter(({ message }) => {
  return (
    <div
      className={classNames(styles.message, {
        [styles.currentMessage]: message.author === "User",
      })}
    >
      <h3>{message.message}</h3>
      <p>{message.author}</p>
      <p>{format(new Date(), "yyyy-MM-dd")}</p>
      <hr />
    </div>
  );
});
