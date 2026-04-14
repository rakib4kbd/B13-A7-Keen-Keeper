"use client";
import { TimelineContext } from "@/provider/TimelineProvider";
import React, { useContext } from "react";

const TimelineSelector = ({ selector, setSelector }) => {
  const { timeline } = useContext(TimelineContext);

  const options = [];
  timeline.forEach((element) => {
    if (!options.includes(element.action)) {
      options.push(element.action);
    }
  });

  return (
    <select defaultValue="Filter Timeline" className="select">
      <option disabled={true}>Filter Timeline</option>
      {options.map((option, index) => (
        <option
          key={index}
          onClick={() => {
            setSelector(option);
          }}
        >
          {option}
        </option>
      ))}
    </select>
  );
};

export default TimelineSelector;
