"use client";
import { createContext, useState } from "react";

export const TimelineContext = createContext([]);

import React from "react";

const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);
  return (
    <TimelineContext.Provider value={{ timeline, setTimeline }}>
      {children}
    </TimelineContext.Provider>
  );
};

export default TimelineProvider;
