import { chats } from "@/utils/chat.types";
import { ChatArea } from "./ChatArea";
import { ChatHeader } from "./ChatHeader";
import { TextInput } from "./TextInput";
import { useState } from "react";

function ChatWindow() {
  const [allChats, setAllChats] = useState(chats);
  return (
    <div className="col-span-9 h-[calc(100vh-140px)] ">
      <ChatHeader name={"Shubham"} profilePic="https://github.com/shadcn.png" />
      <ChatArea allChats={allChats} />
      <TextInput allChats={allChats} setAllChats={setAllChats} />
    </div>
  );
}

export default ChatWindow;
