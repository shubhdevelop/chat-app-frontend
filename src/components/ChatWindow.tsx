import { ChatArea } from "./ChatArea";
import { ChatHeader } from "./ChatHeader";
import { TextInput } from "./TextInput";

function ChatWindow() {
  return (
    <div className="col-span-9">
      <ChatHeader name={"Shubham"} profilePic="https://github.com/shadcn.png" />
      <ChatArea />
      <TextInput />
    </div>
  );
}

export default ChatWindow;
