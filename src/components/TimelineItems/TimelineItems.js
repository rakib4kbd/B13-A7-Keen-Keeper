"use client";
import { TimelineContext } from "@/provider/TimelineProvider";
import { Video } from "lucide-react";
import { SearchAlert } from "lucide-react";
import { MessageSquareMore } from "lucide-react";
import { Phone } from "lucide-react";
import React, { useContext } from "react";

const timelineLogo = {
  Call: <Phone />,
  Text: <MessageSquareMore />,
  Video: <Video />,
};

const TimelineItems = ({ selector }) => {
  const { timeline } = useContext(TimelineContext);

  return (
    <div className="container mx-auto mt-2 md:mt-6">
      {timeline.length > 0 ? (
        <div className="flex flex-col gap-2 md:gap-6">
          {selector == "All"
            ? timeline.map((item, index) => (
                <div
                  key={index}
                  className="card drop-shadow p-6 bg-white text-description"
                >
                  <div className="flex gap-3 items-center">
                    <div>{timelineLogo[item.action]}</div>
                    <div>
                      <h1>
                        <strong className="text-heading-profile font-medium">
                          {item.action}
                        </strong>{" "}
                        with {item.user}
                      </h1>
                      <p className="font-medium">{item.date}</p>
                    </div>
                  </div>
                </div>
              ))
            : timeline
                .filter((item) => item.action == selector)
                .map((item, index) => (
                  <div
                    key={index}
                    className="card drop-shadow p-6 bg-white text-description"
                  >
                    <div className="flex gap-3 items-center">
                      <div>{timelineLogo[item.action]}</div>
                      <div>
                        <h1>
                          <strong className="text-heading-profile font-medium">
                            {item.action}
                          </strong>{" "}
                          with {item.user}
                        </h1>
                        <p className="font-medium">{item.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
        </div>
      ) : (
        <div className="flex items-center justify-center py-20 bg-white card">
          <div>
            <SearchAlert width={50} height={50} />
          </div>
          <h1 className="text-xl">Timeline Empty!</h1>
        </div>
      )}
    </div>
  );
};

export default TimelineItems;
