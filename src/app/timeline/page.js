"use client";

import TimelineItems from "@/components/TimelineItems/TimelineItems";
import TimelineSelector from "@/components/TimelineSelector/TimelineSelector";
import { useState } from "react";

const Timeline = () => {
  const [selector, setSelector] = useState("All");
  return (
    <div className="mt-4 md:mt-20 container mx-auto px-2 md:px-0">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">Timeline</h1>
        <TimelineSelector selector={selector} setSelector={setSelector} />
      </div>
      <div>
        <TimelineItems selector={selector} />
      </div>
    </div>
  );
};

export default Timeline;
