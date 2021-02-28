import React from "react";
import clsx from "clsx";
import styles from "./eventSheet/eventSheet.module.css";

const EventSheet = ({ eventId, open, onClose }) => {
  const [display, setDisplay] = React.useState("none");

  React.useEffect(() => {
    if (open) {
      setDisplay("block");
    } else {
      setTimeout(() => {
        setDisplay("none");
      }, 150);
    }
  }, [open]);

  return (
    <div
      className={clsx([
        "border-l border-gray-200 fixed right-0 bg-white hidden",
        styles["event-sheet-root"],
        open ? styles["event-sheet-open"] : styles["event-sheet-closed"],
      ])}
      style={{ display }}
    >
      <button onClick={onClose}>x</button>
    </div>
  );
};

const EventSheetContext = React.createContext({});

const EventSheetProvider = ({ children }) => {
  const [isEventSheetOpen, setIsEventSheetOpen] = React.useState(false);
  const [eventId, setEventId] = React.useState(null);

  const openEventSheet = (newEventId) => {
    setIsEventSheetOpen(true);
    setEventId(newEventId);
  };

  const closeEventSheet = () => {
    setIsEventSheetOpen(false);
    setEventId(null);
  };

  return (
    <EventSheetContext.Provider value={{ openEventSheet, isEventSheetOpen }}>
      {children}
      <EventSheet
        open={isEventSheetOpen}
        eventId={eventId}
        onClose={closeEventSheet}
      />
    </EventSheetContext.Provider>
  );
};

const useEventSheet = () => {
  const { openEventSheet, isEventSheetOpen } = React.useContext(
    EventSheetContext
  );
  return { openEventSheet, isEventSheetOpen };
};

export { EventSheet, EventSheetProvider, useEventSheet };
