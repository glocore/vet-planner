import clsx from "clsx";
import styles from "./appBar/appBar.module.css";

const AppBar = () => {
  return <div className={clsx([styles["app-bar-root"], "bg-gray-200"])} />;
};

export { AppBar };
