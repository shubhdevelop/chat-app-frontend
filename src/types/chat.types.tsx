export type AllChat = Chat[];

export type Chat = {
  content: string;
  id: number;
  time?: number;
  type: "sent" | "received";
  reactions?: [];
};

export const chats: AllChat = [
  {
    content:
      "it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    id: 1,
    time: new Date().getTime(),
    type: "sent",
    reactions: [],
  },
  {
    content:
      "it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    id: 1,
    time: new Date().getTime(),
    type: "received",
    reactions: [],
  },
];
