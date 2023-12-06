import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "../ui/card";

type Props = {
  message: string;
  profilePic: string;
  varient: "sent" | "received";
  img: string | undefined;
};

function chat({ message, profilePic, varient, img }: Props) {
  const style =
    varient === "received"
      ? "flex-row bg-blue-700 text-white"
      : "flex-flow-reverse bg-white border-[1px] border-black text-black";

  return (
    <div
      className={`flex ${
        varient === "sent" ? "flex-row-reverse" : "flex-row"
      } my-1 gap-2`}
    >
      <Avatar className="relative top-[5px] ">
        <AvatarImage src={profilePic} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Card className={` text-white max-w-4xl w-max py-2 px-4 ${style}`}>
        {img ? (
          <img src={img} alt="" />
        ) : (
          <p className="leading-7 [&:not(:first-child)]:mt-6">{message}</p>
        )}
      </Card>
    </div>
  );
}

export default chat;
