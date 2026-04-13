"use client";

import { MessageSquareMore } from "lucide-react";
import { Video } from "lucide-react";
import { PhoneCall } from "lucide-react";
import React from "react";

const QuickCheckIn = ({ friendProfile }) => {
  const handleCheckIn = (userId, clickedBtn) => {
    console.log("user", userId, "button", clickedBtn);
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
            handleCheckIn(friendProfile.name, "call");
          }}
        >
          <PhoneCall width={100} /> <p>Call</p>
        </button>
        <button
          className="btn btn-lg flex flex-col items-center justify-center card py-5 w-full h-full"
          onClick={() => {
            handleCheckIn(friendProfile.name, "text");
          }}
        >
          <MessageSquareMore width={100} /> <p>Text</p>
        </button>
        <button
          className="btn btn-lg flex flex-col items-center justify-center card py-5 w-full h-full"
          onClick={() => {
            handleCheckIn(friendProfile.name, "video");
          }}
        >
          <Video width={100} /> <p>Video</p>
        </button>
      </div>
    </div>
  );
};

export default QuickCheckIn;
