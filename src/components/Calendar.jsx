import clsx from "clsx";
import styles from "./calendar/calendar.module.css";

const Calendar = () => {
  return (
    <div
      className={clsx(["calendar-root bg-red-50", styles["calendar-root"]])}
    />
  );
};

export { Calendar };
