import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
type FriendProps = {
  profilePic: string;
  name: string;
  unread: string;
  id: number;
};

const Friend = ({ profilePic, name, unread }: FriendProps) => {
  return (
    <div className="w-full border-1 p-3 hover:bg-blue-100 cursor-pointer">
      <div className="flex flex-row gap-4  align-middle">
        <div className="">
          <Avatar>
            <AvatarImage src={profilePic} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="">
          <h4 className=" text-lg font-semibold tracking-tight">{name}</h4>
          <p className="leading-2 [&:not(:first-child)]:mt-[-5px]">{unread}</p>
        </div>
      </div>
    </div>
  );
};

export default Friend;
