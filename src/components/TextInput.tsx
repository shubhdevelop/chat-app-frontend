import { Input } from "@/components/ui/input";
import EmojiPicker from "emoji-picker-react";
import { Smile } from "lucide-react";
import { useState } from "react";

export const TextInput = () => {
  const [isEmojiPickerInFocus, setIsEmojiPickerInFocus] = useState(false);
  const [message, setMessage] = useState("");
  return (
    <div className="flex flex-row gap-2 w-full ">
      <Smile
        onClick={() => {
          setIsEmojiPickerInFocus((prev) => !prev);
        }}
        onBlur={() => {
          setIsEmojiPickerInFocus((prev) => !prev);
        }}
        size={40}
        className="relative bottom-[-15px] cursor-pointer"
      />
      <div
        className={`absolute bottom-[150px] ${
          isEmojiPickerInFocus ? "" : "hidden"
        }`}
      >
        <EmojiPicker
          onEmojiClick={(emoji) => {
            const final = message + emoji.emoji;
            setMessage(final);
          }}
        />
      </div>
      <div className="h-[70px] flex flex-col justify-center  w-[calc(100%-250px)]">
        <Input
          className="h-[calc(100%-15px)] w-full pl-4 "
          type="text"
          placeholder="Message......."
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
        />
      </div>
      <div className=" w-[calc(100%-(100%-250px))] h-[calc(70px)] flex flex-col justify-center border-l -[1px] px-2"></div>
    </div>
  );
};
