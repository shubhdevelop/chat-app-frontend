import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Phone, Video } from "lucide-react";
import { NavLink } from "react-router-dom";
import Option from "./Option";
type Props = {
  profilePic: string;
  name: string;
};

export const ChatHeader = ({ profilePic, name }: Props) => {
  return (
    <div className="border-b h-[70px] flex  flex-row  items-center ">
      <div className="w-full flex gap-4 flex-row justify-between">
        <div className="flex gap-4 flex-row">
          <NavLink to={"/profile"}>
            <Avatar className="relative top-[5px] ">
              <AvatarImage src={profilePic} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </NavLink>
          <h4 className="text-xl font-semibold mt-[5px] tracking-tight">
            {name}
          </h4>
        </div>
        <div className="flex flex-row items-center gap-5">
          <NavLink unstable_viewTransition={true} to={"/call/?has_video=true"}>
            <Video size={30} strokeWidth={1} className=" cursor-pointer" />
          </NavLink>
          <NavLink unstable_viewTransition={true} to={"/call/?has_video=false"}>
            <Phone size={30} strokeWidth={1} className=" cursor-pointer" />
          </NavLink>
          <Option />
        </div>
      </div>
    </div>
  );
};
