const fetchFriends = async () => {
  const res = await fetch("http://localhost:3000/friends.json");
  return res.json();
};

export default fetchFriends;
