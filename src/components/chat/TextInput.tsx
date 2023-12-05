import { Input } from "@/components/ui/input";
import { AllChat, Chat } from "@/utils/chat.types";
import EmojiPicker from "emoji-picker-react";
import { Smile, Mic, Image, Heart, SendHorizontal } from "lucide-react";
import { SetStateAction, useState } from "react";

type TextInputProps = {
  allChats: AllChat;
  setAllChats: React.Dispatch<SetStateAction<AllChat>>;
};

export const TextInput = ({ allChats, setAllChats }: TextInputProps) => {
  const [isEmojiPickerInFocus, setIsEmojiPickerInFocus] = useState(false);
  const [message, setMessage] = useState("");
  return (
    <div className="flex h-[70px] flex-row gap-2 w-full ">
      <Smile
        onClick={() => {
          setIsEmojiPickerInFocus((prev) => !prev);
        }}
        size={40}
        strokeWidth={1}
        className="relative bottom-[-15px] cursor-pointer"
      />
      <div
        className={`absolute bottom-[150px] ${
          isEmojiPickerInFocus ? "" : "hidden"
        } drop-shadow-2xl`}
      >
        <EmojiPicker
          onEmojiClick={(emojiData, e) => {
            setMessage((prev) => prev + emojiData.emoji);
          }}
        />
      </div>
      <div className="h-[70px] flex flex-col justify-center  w-[calc(100%-100px)]">
        <Input
          className="h-[calc(100%-15px)]  w-full pl-4 "
          type="text"
          placeholder="Message......."
          onChange={(e) => {
            setMessage(e.target.value);
            console.log(message);
          }}
          value={message}
        />
      </div>
      <SendHorizontal
        size={40}
        strokeWidth={1}
        onClick={() => {
          const newChat: Chat = {
            content: message,
            id: Math.random(),
            type: "sent",
          };
          if (newChat) {
            setAllChats([...allChats, newChat]);
            setMessage("");
          }
        }}
        className="relative bottom-[-15px] cursor-pointer"
      />
      <Mic
        size={40}
        strokeWidth={1}
        className="relative bottom-[-15px] cursor-pointer"
      />
      <Image
        size={40}
        strokeWidth={1}
        className="relative bottom-[-15px] cursor-pointer"
      />
      <Heart
        size={40}
        strokeWidth={1}
        className="relative bottom-[-15px] cursor-pointer"
      />
    </div>
  );
};