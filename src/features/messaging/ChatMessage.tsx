import React from "react";

interface ChatMessageProps {
  sender: string;
  text: string;
  timestamp: string;
  isOwnMessage?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  sender,
  text,
  timestamp,
  isOwnMessage,
}) => {
  return (
    <div
      className={`flex flex-col ${
        isOwnMessage ? "items-end" : "items-start"
      }`}
    >
      <div
        className={`px-3 py-2 rounded-lg max-w-xs ${
          isOwnMessage
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-800"
        }`}
      >
        {text}
      </div>
      <span className="text-xs text-gray-400 mt-1">{timestamp}</span>
    </div>
  );
};

export default ChatMessage;
