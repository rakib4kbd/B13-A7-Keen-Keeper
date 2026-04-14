import { createContext } from "react";

export const TimelineContext = createContext([]);

const TimelineProvider = ({ children }) => {
  return (
    <TimelineContext.Provider value={[]}>{children}</TimelineContext.Provider>
  );
};
