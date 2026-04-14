import Image from "next/image";
import Link from "next/link";

export const statusCard = {
  active: {
    label: "On Track",
    bg: "bg-green-700",
  },
  overdue: {
    label: "Over Due",
    bg: "bg-red-700",
  },
  almostdue: {
    label: "Almost Due",
    bg: "bg-yellow-700",
  },
};

const FriendCard = ({ friendList }) => {
  return (
    <>
      {friendList.map((friend) => (
        <Link
          href={`friend/${friend.id}`}
          key={friend.id}
          className="hover:drop-shadow-lg"
        >
          <div className="card bg-white p-6 flex flex-col gap-2 drop-shadow">
            <div className="flex items-center justify-center">
              <Image
                src={friend.picture.trim()}
                alt={friend.name}
                width={80}
                height={80}
                className="rounded-full w-20 h-20 object-cover"
              />
            </div>
            <h1 className="text-heading text-xl font-semibold">
              {friend.name}
            </h1>
            <p className="text-xs">{friend.days_since_contact}d ago</p>
            <div className="flex items-center gap-2 justify-center">
              {friend.tags.map((tag, index) => (
                <p
                  key={index}
                  className="bg-green-200 rounded-full px-2 py-1 text-sm text-nowrap"
                >
                  {tag.toUpperCase()}
                </p>
              ))}
            </div>
            <div className="flex items-center justify-center">
              <p
                className={`${statusCard[friend.status].bg} px-2 rounded-full text-white`}
              >
                {statusCard[friend.status].label}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default FriendCard;
