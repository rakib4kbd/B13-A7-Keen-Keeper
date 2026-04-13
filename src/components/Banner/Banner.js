import { Plus } from "lucide-react";
const Banner = () => {
  return (
    <div className="container mx-auto pt-10 md:pt-20 px-2 md:px-0 text-center">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="font-bold text-3xl text-heading">
            Friends to keep close in your life
          </h1>
          <p className="text-md text-description">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>
        <div>
          <button className="btn btn-active bg-green-900 hover:bg-green-950 text-white">
            <Plus />
            Add a Friend
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
