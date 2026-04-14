import TimelineItems from "@/components/TimelineItems/TimelineItems";
import { useContext } from "react";

const Timeline = () => {
  return (
    <div className="mt-4 md:mt-20 container mx-auto">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">Timeline</h1>
        <select>Filter Timeline</select>
      </div>
      <div>
        <TimelineItems />
      </div>
    </div>
  );
};

export default Timeline;
