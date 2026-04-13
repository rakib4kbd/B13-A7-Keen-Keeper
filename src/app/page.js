import Banner from "@/components/Banner/Banner";
import FriendsSection from "@/components/FriendsSection/FriendsSection";
import fetchFriends from "@/utils/fetchFriends";

const Home = () => {
  const friendsPromise = fetchFriends();

  return (
    <div>
      <Banner />
      <div className="mt-10"></div>
      <FriendsSection friendsPromise={friendsPromise} />
    </div>
  );
};

export default Home;
