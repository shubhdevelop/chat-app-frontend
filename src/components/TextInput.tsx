import { Input } from "@/components/ui/input";

export const TextInput = () => {
  return (
    <div className="flex flex-row gap-2 w-full ">
      <div className="h-[70px] flex flex-col justify-center  w-[calc(100%-250px)]">
        <Input
          className="h-[calc(100%-15px)] w-full pl-4 "
          type="text"
          placeholder="Message......."
        />
      </div>
      <div className=" w-[calc(100%-(100%-250px))] h-[calc(70px)] flex flex-col justify-center border-l -[1px] px-2">
        <h1>hey</h1>
      </div>
    </div>
  );
};
