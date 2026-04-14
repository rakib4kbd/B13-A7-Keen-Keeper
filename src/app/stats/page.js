import StatsChart from "@/components/StatsChart/StatsChart";
import React from "react";

const StatsPage = () => {
  return (
    <div className="container mx-auto mt-4 md:mt-20 px-2 md:px-0">
      <div className="flex flex-col justify-center gap-6">
        <h1 className="text-3xl text-heading font-bold">
          Friendship Analytics
        </h1>
        <div className="bg-white card p-6 flex flex-col gap-6">
          <p className="font-medium text-heading-profile">
            By Interaction Type
          </p>
          <div className="flex items-center justify-center">
            <StatsChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
