import React from "react";

interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  timestamp: string;
  unread?: boolean;
}

interface ChatListProps {
  chats: Chat[];
  onSelectChat: (id: number) => void;
}

const ChatList: React.FC<ChatListProps> = ({ chats, onSelectChat }) => {
  return (
    <div className="w-full bg-white shadow rounded-lg overflow-hidden">
      <h2 className="text-lg font-semibold p-4 border-b">Messages</h2>
      <ul className="divide-y divide-gray-200">
        {chats.length > 0 ? (
          chats.map((chat) => (
            <li
              key={chat.id}
              onClick={() => onSelectChat(chat.id)}
              className={`p-4 cursor-pointer hover:bg-gray-100 transition ${
                chat.unread ? "bg-gray-50" : ""
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{chat.name}</span>
                <span className="text-xs text-gray-400">{chat.timestamp}</span>
              </div>
              <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
              {chat.unread && (
                <span className="inline-block mt-1 text-xs text-white bg-blue-500 rounded-full px-2">
                  New
                </span>
              )}
            </li>
          ))
        ) : (
          <li className="p-4 text-gray-500 text-center">No chats available</li>
        )}
      </ul>
    </div>
  );
};

export default ChatList;
