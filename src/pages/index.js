import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';
import { useChatStore } from '../lib/chatStore';

export default function Home() {
  const { getChats } = useChatStore();
  const [activeChat, setActiveChat] = useState(() => {
    const chats = getChats();
    return chats.length > 0 ? chats[0].id : null;
  });

  return (
    <div className="app flex">
      <Sidebar activeChat={activeChat} setActiveChat={setActiveChat} />
      {activeChat ? (
        <Chat activeChat={activeChat} />
      ) : (
        <div className="empty-chat">Select or create a chat</div>
      )}
    </div>
  );
}
