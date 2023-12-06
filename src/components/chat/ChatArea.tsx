import { useEffect, useRef, useState } from "react";
import Chat from "./chat";
import React from "react";
import { AllChat } from "@/types/chat.types";

type ChatAreaProps = {
  allChats: AllChat;
};

export const ChatArea = ({ allChats }: ChatAreaProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the bottom of the container when messages change
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [allChats]);

  return (
    <div
      ref={containerRef}
      className="h-[calc(100%-140px)] flex flex-col justify-start overflow-y-auto py-6"
    >
      {allChats.map((chat) => (
        <Chat
          key={chat.id}
          varient={`${chat.type}`}
          profilePic="https://github.com/shadcn.png"
          message={chat.content}
          img={chat.img}
        />
      ))}
    </div>
  );
};
