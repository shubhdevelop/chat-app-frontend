import { TypographyH2, TypographyP } from "../typo/Typography";
import { Button } from "../ui/button";
import { AvatarImage, Avatar } from "../ui/avatar";
import { SetStateAction } from "react";
import Preview from "./Preview";

type Props = {
  isCalling: Boolean;
  setIsCalling: React.Dispatch<SetStateAction<boolean>>;
};

const DailUp = ({ isCalling, setIsCalling }: Props) => {
  return (
    <div
      className={`${
        isCalling ? "hidden" : ""
      } w-[600px]  h-[300px] rounded-lg flex flex-row gap-4 justify-center items-center`}
    >
      <Preview />
      <div className={`bg-slate-700 min-w-sm p-6 rounded-lg`}>
        <center>
          <Avatar className="w-20 h-20 mb-2">
            <AvatarImage src={"https://github.com/shadcn.png"} />
          </Avatar>
          <TypographyH2>Shubham Raj</TypographyH2>
          <TypographyP className="text-white">Read to call?</TypographyP>
          <Button
            onClick={() => setIsCalling(true)}
            className="mt-2"
            variant={"outline"}
          >
            Start Call
          </Button>
        </center>
      </div>
    </div>
  );
};

export default DailUp;
