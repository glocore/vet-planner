import clsx from "clsx";
import styles from "./event/event.module.css";

const Event = ({ type, startMinute, endMinute }) => {
  return (
    <div
      className={clsx([styles["event-root"], styles[`type-${type}`]])}
      style={{
        top: `calc(${startMinute} * (var(--cell-height) / 30))`,
        height: `calc(${endMinute - startMinute} * (var(--cell-height) / 30))`,
      }}
    ></div>
  );
};

export { Event };
