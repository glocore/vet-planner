import clsx from "clsx";
import styles from "./navRail/navRail.module.css";
const NavRail = () => {
  return (
    <div
      className={clsx(["border-r border-gray-200", styles["nav-rail-root"]])}
    ></div>
  );
};

export { NavRail };
