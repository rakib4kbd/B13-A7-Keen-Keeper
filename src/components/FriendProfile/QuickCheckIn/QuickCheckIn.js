"use client";

import { TimelineContext } from "@/provider/TimelineProvider";
import { MessageSquareMore } from "lucide-react";
import { Video } from "lucide-react";
import { PhoneCall } from "lucide-react";
import { useContext } from "react";
import { toast } from "react-toastify";
const QuickCheckIn = ({ friendProfile }) => {
  const { timeline, setTimeline } = useContext(TimelineContext);
  const handleCheckIn = (userName, clickedBtn) => {
    setTimeline([
      ...timeline,
      {
        user: userName,
        action: clickedBtn,
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
      },
    ]);
    toast(`${clickedBtn} with ${userName}`);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-heading-profile text-xl font-medium">
        Quick Check-In
      </h1>

      <div className="grid grid-cols-3 gap-4">
        <button
          className="btn btn-lg flex flex-col items-center justify-center card py-5 w-full h-full"
          onClick={() => {
            handleCheckIn(friendProfile.name, "Call");
          }}
        >
          <PhoneCall width={100} /> <p>Call</p>
        </button>
        <button
          className="btn btn-lg flex flex-col items-center justify-center card py-5 w-full h-full"
          onClick={() => {
            handleCheckIn(friendProfile.name, "Text");
          }}
        >
          <MessageSquareMore width={100} /> <p>Text</p>
        </button>
        <button
          className="btn btn-lg flex flex-col items-center justify-center card py-5 w-full h-full"
          onClick={() => {
            handleCheckIn(friendProfile.name, "Video");
          }}
        >
          <Video width={100} /> <p>Video</p>
        </button>
      </div>
    </div>
  );
};

export default QuickCheckIn;
