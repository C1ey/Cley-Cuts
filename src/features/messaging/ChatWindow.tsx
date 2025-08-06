import React from "react";
import ChatMessage from "./ChatMessage";

interface Message {
  id: number;
  sender: string;
  text: string;
  timestamp: string;
}

interface ChatWindowProps {
  messages: Message[];
  chatName: string;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, chatName }) => {
  return (
    <div className="flex flex-col flex-grow bg-white shadow rounded-lg overflow-hidden">
      <div className="p-4 border-b font-semibold">{chatName}</div>
      <div className="flex-grow p-4 space-y-3 overflow-y-auto">
        {messages.length > 0 ? (
          messages.map((msg) => (
            <ChatMessage
              key={msg.id}
              sender={msg.sender}
              text={msg.text}
              timestamp={msg.timestamp}
              isOwnMessage={msg.sender === "me"}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center mt-10">
            No messages yet
          </p>
        )}
      </div>
    </div>
  );
};

export default ChatWindow;
