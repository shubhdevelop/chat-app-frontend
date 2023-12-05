import Friend from "./Friend";

function FriendList() {
  return (
    <div className=" py-4 col-span-3 overflow-y-auto h-full border-r-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
      <Friend
        name={"Shubham Raj"}
        unread="hiiiii"
        profilePic="https://github.com/shadcn.png"
      />
      <Friend
        name={"Shubham Raj"}
        unread="hiiiii"
        profilePic="https://github.com/shadcn.png"
      />{" "}
    </div>
  );
}

export default FriendList;
