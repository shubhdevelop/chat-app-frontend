import { Input } from "@/components/ui/input";
import { AllChat, Chat } from "@/types/chat.types";
import EmojiPicker from "emoji-picker-react";
import { Smile, Mic, Image, Heart, SendHorizontal } from "lucide-react";
import { SetStateAction, useState } from "react";
import ImageInput from "./ImageInput";

type TextInputProps = {
  setAllChats: React.Dispatch<SetStateAction<AllChat>>;
};

export const TextInput = ({ setAllChats }: TextInputProps) => {
  const [isEmojiPickerInFocus, setIsEmojiPickerInFocus] = useState(false);
  const [message, setMessage] = useState("");
  return (
    <div className="flex h-[70px] flex-row gap-2 w-full relative">
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

          const reply: Chat = {
            content: "Replying to you: " + message,
            id: Math.random(),
            type: "received",
          };
          if (newChat) {
            setAllChats((prev) => [...prev, newChat, reply]);
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
      <ImageInput setAllChats={setAllChats} />
      <Heart
        size={40}
        strokeWidth={1}
        className="relative bottom-[-15px] cursor-pointer"
      />
    </div>
  );
};
