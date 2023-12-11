import { AllChat, chats } from "./chat.types";

export type User = {
  name: string;
  chats: AllChat;
  id: number;
};

export type Users = User[];

export const users: Users = [
  {
    name: "Shubham Raj",
    chats: chats,
    id: Math.random(),
  },
  {
    name: "yash Raj",
    chats: chats,
    id: Math.random(),
  },
  {
    name: "Prakash Raj ",
    chats: chats,
    id: Math.random(),
  },
  {
    name: "Amit Raj",
    chats: chats,
    id: Math.random(),
  },
];
