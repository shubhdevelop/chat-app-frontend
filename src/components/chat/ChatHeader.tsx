import { Avatar, AvatarImage } from "@/components/ui/avatar";

type Props = {
  profilePic: string;
  name: string;
};

export const ChatHeader = ({ profilePic, name }: Props) => {
  return (
    <div className="border-b h-[70px] flex  flex-row  align-middle py-4">
      <div className="flex gap-4 flex-row">
        <Avatar>
          <AvatarImage src={profilePic} />
        </Avatar>
        <h4 className="text-xl font-semibold mt-[5px] tracking-tight">
          {name}
        </h4>
      </div>
    </div>
  );
};
