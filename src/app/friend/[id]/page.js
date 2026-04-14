import FriendProfile from "@/components/FriendProfile/FriendProfile";
import fetchFriends from "@/utils/fetchFriends";

export async function generateStaticParams() {
  const friends = await fetchFriends();

  return friends.map((friend) => ({
    id: String(friend.id),
  }));
}

const FriendById = async ({ params }) => {
  const { id } = await params;

  const friends = await fetchFriends();
  const friendProfile = friends.find((item) => item.id === Number(id));

  return (
    <div>
      <FriendProfile friendProfile={friendProfile} />
    </div>
  );
};

export default FriendById;
