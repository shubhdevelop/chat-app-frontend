import { User, Users } from "@/types/user.types";
import Friend from "./Friend";

type UserProps = {
  users: Users;
};

function FriendList({ users }: UserProps) {
  return (
    <div className=" py-4 col-span-3 overflow-y-auto h-full border-r-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
      {users.map((user: User) => {
        return (
          <Friend
            name={user.name}
            unread="hiiiii"
            key={user.id}
            id={user.id}
            profilePic="https://github.com/shadcn.png"
          />
        );
      })}
    </div>
  );
}

export default FriendList;
