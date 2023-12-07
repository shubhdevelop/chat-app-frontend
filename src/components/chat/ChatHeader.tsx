import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { MoreVertical, Phone, Video } from "lucide-react";

type Props = {
  profilePic: string;
  name: string;
};

export const ChatHeader = ({ profilePic, name }: Props) => {
  return (
    <div className="border-b h-[70px] flex  flex-row  items-center ">
      <div className="w-full flex gap-4 flex-row justify-between">
        <div className="flex gap-4 flex-row">
          <Avatar>
            <AvatarImage src={profilePic} />
          </Avatar>
          <h4 className="text-xl font-semibold mt-[5px] tracking-tight">
            {name}
          </h4>
        </div>
        <div className="flex flex-row items-center gap-5">
          <Video size={30} strokeWidth={1} className=" cursor-pointer" />
          <Phone size={30} strokeWidth={1} className=" cursor-pointer" />
          <MoreVertical size={30} strokeWidth={1} className=" cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
