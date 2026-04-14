import { TriangleAlert } from "lucide-react";
import React from "react";

const NotFound = () => {
  return (
    <div className="container mx-auto mt-4 md:mt-20">
      <div className="card bg-error p-30 flex flex-col items-center justify-center gap-5 text-white">
        <TriangleAlert width={50} height={50} />
        <h1 className="text-5xl">404</h1>
        <h1 className="text-2xl font-semibold">Not Found</h1>
      </div>
    </div>
  );
};

export default NotFound;
