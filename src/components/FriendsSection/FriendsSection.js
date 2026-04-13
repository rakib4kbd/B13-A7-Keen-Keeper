import { use } from "react";
import FriendCard from "./FriendCard/FriendCard";

const FriendsSection = ({ friendsPromise }) => {
  const friendList = use(friendsPromise);

  return (
    <div className="container mx-auto">
      {/* Status Section */}
      <div className="container mx-auto mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-2 md:mx-0 drop-shadow">
          <div className="card bg-white flex flex-col items-center justify-center gap-2 p-8">
            <h1 className="text-2xl font-semibold text-heading">
              {friendList.length}
            </h1>
            <p className="text-description">Total Friends</p>
          </div>
          <div className="card bg-white flex flex-col items-center justify-center gap-2 p-8">
            <h1 className="text-2xl font-semibold text-heading">
              {friendList.filter((friend) => friend.status === "active").length}
            </h1>
            <p className="text-description">On Track</p>
          </div>
          <div className="card bg-white flex flex-col items-center justify-center gap-2 p-8">
            <h1 className="text-2xl font-semibold text-heading">6</h1>
            <p className="text-description">Needs Attention</p>
          </div>
          <div className="card bg-white flex flex-col items-center justify-center gap-2 p-8">
            <h1 className="text-2xl font-semibold text-heading">12</h1>
            <p className="text-description">Interactions This Month</p>
          </div>
        </div>
      </div>
      <div className="border border-gray-100"></div>
      <div className="mx-auto container mt-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-heading text-2xl font-semibold">Your Friends</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-2 md:mx-0 text-center">
            <FriendCard friendList={friendList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsSection;
