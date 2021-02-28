import React from "react";
import clsx from "clsx";
import add from "date-fns/add";
import startOfDay from "date-fns/startOfDay";
import format from "date-fns/format";
import styles from "./calendar/calendar.module.css";

const names = [
  "John Doe",
  "Jane Doe",
  "John Doe",
  "Jane Doe",
  "John Doe",
  "Jane Doe",
];

const getTimeString = (_, cellIndex) => {
  let result = "";
  if (cellIndex !== 0) {
    const time = add(startOfDay(new Date()), { minutes: cellIndex * 30 });
    result = format(time, "hh:mm aaa");
  }
  return result;
};

const sampleEvents = (() => {
  const getStartMinute = (index) => {
    return index * 100;
  };

  const getEndMinute = (index) => {
    return index * 100 + 30;
  };

  const getEvent = (_, index) => {
    return {
      startMinute: getStartMinute(index),
      endMinute: getEndMinute(index),
    };
  };

  return new Array(5).fill().map(getEvent);
})();

// 24 hours in a day, and each cell is 30 mins
// hence total no. of cells = 24 * 2 = 48
const cells = new Array(48).fill().map(getTimeString);

// Reference: https://stackoverflow.com/a/35947146
const Calendar = () => {
  const headerRef = React.useRef(null);
  const timeColumnRef = React.useRef(null);

  const handleScroll = (e) => {
    headerRef.current.scrollLeft = e.target.scrollLeft;
    timeColumnRef.current.scrollTop = e.target.scrollTop;
  };

  return (
    <>
      <div className={clsx([styles["calendar-root"]])}>
        <div style={{ display: "flex" }}>
          <div
            className={clsx([
              "border-b border-r border-gray-200",
              styles["header-spacer"],
            ])}
          />
          <div
            ref={headerRef}
            className={clsx([
              "overflow-hidden inline-flex",
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
        </div>
        <div className="flex">
          <div
            className={clsx([
              "flex flex-col border-r border-gray-200 overflow-hidden",
              styles["time-column"],
            ])}
            ref={timeColumnRef}
          >
            {cells.map((time, index) => (
              <div
                className={clsx([
                  "p-4 border-gray-200 relative",
                  styles["time-cell"],
                ])}
                key={index}
              >
                <span
                  className={clsx([
                    "absolute text-xs text-gray-400",
                    styles["timestamp"],
                  ])}
                >
                  {time}
                </span>
              </div>
            ))}
          </div>
          <div
            className={clsx([
              "inline-flex overflow-x-auto overflow-y-auto",
              styles["columns-container"],
            ])}
            onScroll={handleScroll}
          >
            {names.map((_, index) => (
              <div
                key={index}
                className={clsx([
                  "w-full block relative",
                  styles["column-root"],
                ])}
              >
                {cells.map((_, index) => (
                  <div
                    key={index}
                    className={clsx([
                      "p-4 w-full border-b border-r border-gray-200",
                      styles["cell"],
                    ])}
                  />
                ))}
                {sampleEvents.map((event, index) => (
                  <div
                    key={index}
                    style={{
                      position: "absolute",
                      width: "calc(100% - 20px)",
                      marginLeft: 10,
                      marginRight: 10,
                      backgroundColor: "white",
                      border: "1px solid black",
                      top: event.startMinute * (8 / 3),
                      height: ((event.endMinute - event.startMinute) * 8) / 3,
                    }}
                  ></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export { Calendar };
