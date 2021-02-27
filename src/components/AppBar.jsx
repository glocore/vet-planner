import clsx from "clsx";
import styles from "./appBar/appBar.module.css";

const AppBar = () => {
  return (
    <div
      className={clsx([styles["app-bar-root"], "border-b border-gray-200"])}
    />
  );
};

export { AppBar };
