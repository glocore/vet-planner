import React from "react";
import clsx from "clsx";
import styles from "./calendar/calendar.module.css";

const names = [
  "John Doe",
  "Jane Doe",
  "John Doe",
  "Jane Doe",
  "John Doe",
  "Jane Doe",
];

const events = new Array(20).fill("event");

// Reference: https://stackoverflow.com/a/35947146
const Calendar = () => {
  const headerRef = React.useRef(null);

  const handleScroll = (e) => {
    headerRef.current.scrollLeft = e.target.scrollLeft;
  };

  return (
    <>
      <div className={clsx([styles["calendar-root"]])}>
        <div
          id="headerdiv"
          ref={headerRef}
          className={clsx([
            "overflow-hidden flex",
            styles["column-headers-container"],
          ])}
        >
          {names.map((name, index) => (
            <div
              key={index}
              className={clsx([
                "border-b border-r border-gray-200 w-full p-4",
                styles["column-header"],
              ])}
            >
              {name}
            </div>
          ))}
        </div>
        <div
          className={clsx([
            "flex overflow-x-auto overflow-y-auto",
            styles["columns-container"],
          ])}
          onScroll={handleScroll}
        >
          {names.map((_, index) => (
            <div
              key={index}
              className={clsx(["w-full block", styles["column-root"]])}
            >
              {events.map((event, index) => (
                <div
                  key={index}
                  className={clsx([
                    "p-4 w-full border-b border-r border-gray-200",
                  ])}
                >
                  {event}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export { Calendar };
