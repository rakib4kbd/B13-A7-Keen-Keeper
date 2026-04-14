"use client";
import { TimelineContext } from "@/provider/TimelineProvider";
import { completeSoftNavigation } from "next/dist/client/components/segment-cache/navigation";
import React, { useContext } from "react";
import { Pie, PieChart } from "recharts";

const StatsChart = ({ isAnimationActive = true }) => {
  const { timeline } = useContext(TimelineContext);

  const callCount = timeline.filter((item) => item.action == "Call").length;
  const textCount = timeline.filter((item) => item.action == "Text").length;
  const videoCount = timeline.filter((item) => item.action == "Video").length;

  const data = [
    {
      action: "Call",
      value: callCount,
      fill: "#006B40",
    },
    {
      action: "Text",
      value: textCount,
      fill: "#800080",
    },
    {
      action: "Video",
      value: videoCount,
      fill: "#90EE90",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <PieChart className="w-80 aspect-square" responsive>
        <Pie
          data={data}
          innerRadius={"80%"}
          outerRadius={"100%"}
          cornerRadius={"50%"}
          paddingAngle={5}
          fill="#8884d8"
          dataKey="value"
          isAnimationActive={isAnimationActive}
        ></Pie>
      </PieChart>
      <div className="flex items-center gap-6">
        {data.map((i, index) => (
          <div key={index} className="flex gap-1 items-center">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: i.fill }}
            ></div>
            <p>{i.action}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsChart;
