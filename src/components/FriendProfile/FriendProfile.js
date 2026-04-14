import Image from "next/image";
import { statusCard } from "../FriendsSection/FriendCard/FriendCard";
import { BellMinus } from "lucide-react";
import { Archive } from "lucide-react";
import { Trash2 } from "lucide-react";
import QuickCheckIn from "./QuickCheckIn/QuickCheckIn";
import { notFound } from "next/navigation";

const FriendProfile = ({ friendProfile }) => {
  if (!friendProfile) {
    notFound();
  }

  return (
    <div className="container mx-auto mt-4 md:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2 md:px-0">
        <div className="flex flex-col items-center  gap-4">
          <div className="card bg-white p-6 flex flex-col gap-2 drop-shadow w-full text-center">
            <div className="flex items-center justify-center">
              <Image
                src={friendProfile.picture.trim()}
                alt={friendProfile.name}
                width={80}
                height={80}
                className="rounded-full w-20 h-20 object-cover"
              />
            </div>
            <h1 className="text-heading text-xl font-semibold">
              {friendProfile.name}
            </h1>
            <div className="flex items-center justify-center">
              <p
                className={`${statusCard[friendProfile.status].bg} px-2 rounded-full text-white`}
              >
                {statusCard[friendProfile.status].label}
              </p>
            </div>
            <div className="flex items-center gap-2 justify-center">
              {friendProfile.tags.map((tag, index) => (
                <p
                  key={index}
                  className="bg-green-200 rounded-full px-2 py-1 text-sm"
                >
                  {tag.toUpperCase()}
                </p>
              ))}
            </div>
            <p className="quote italic text-sm text-description">{`"${friendProfile.bio}"`}</p>
            <p className="text-xs text-description">
              Email: {friendProfile.email}
            </p>
          </div>

          <div className="w-full flex flex-col gap-2">
            <button className="btn btn-block bg-white">
              <BellMinus /> Snooze 2 Weeks
            </button>
            <button className="btn btn-block bg-white">
              <Archive /> Archive
            </button>
            <button className="btn btn-block text-error">
              <Trash2 /> Delete
            </button>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-3 gap-2 md:gap-6">
              <div className="card bg-white flex flex-col items-center justify-center gap-2 p-1 md:p-8 drop-shadow">
                <h1 className="text-lg md:text-2xl font-semibold text-heading">
                  {friendProfile.days_since_contact}
                </h1>
                <p className="text-description">Days Since Contact</p>
              </div>
              <div className="card bg-white flex flex-col items-center justify-center gap-2 p-1 md:p-8 drop-shadow">
                <h1 className="text-lg md:text-2xl font-semibold text-heading">
                  {friendProfile.goal}
                </h1>
                <p className="text-description">Goal (Days)</p>
              </div>
              <div className="card bg-white flex flex-col items-center justify-center gap-2 p-1 md:p-8 drop-shadow">
                <h1 className="text-lg md:text-2xl font-semibold text-heading">
                  {new Date(friendProfile.next_due_date).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    },
                  )}
                </h1>
                <p className="text-description">Next Due</p>
              </div>
            </div>
            <div className="grid grid-cols-1">
              <div className="card bg-white drop-shadow p-6 flex flex-col justify-center gap-4">
                <div className="flex items-center justify-between">
                  <h1 className="text-xl text-heading-profile font-medium">
                    Relationship Goal
                  </h1>
                  <button className="btn">Edit</button>
                </div>
                <p className="font-medium">
                  Connect Every <strong>30 Days</strong>
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 bg-white drop-shadow p-6 card">
              <QuickCheckIn friendProfile={friendProfile} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendProfile;
