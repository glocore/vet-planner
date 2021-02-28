import clsx from "clsx";
import { useEventSheet } from "../EventSheet";
import styles from "./event/event.module.css";

const Event = ({ type, startMinute, endMinute }) => {
  const { openEventSheet } = useEventSheet();
  return (
    <div
      onClick={openEventSheet}
      className={clsx([styles["event-root"], styles[`type-${type}`]])}
      style={{
        top: `calc(${startMinute} * (var(--cell-height) / 30))`,
        height: `calc(${endMinute - startMinute} * (var(--cell-height) / 30))`,
      }}
    ></div>
  );
};

export { Event };
