import { FiPlus, FiMessageSquare, FiTrash2, FiEdit } from 'react-icons/fi';
import { useChatStore } from '../lib/chatStore';
import { useState } from 'react';

export default function Sidebar({ activeChat, setActiveChat }) {
  const { getChats, createChat, deleteChat, renameChat } = useChatStore();
  const [editingChat, setEditingChat] = useState(null);
  const [newTitle, setNewTitle] = useState('');

  const handleCreateChat = () => {
    const chat = createChat();
    setActiveChat(chat.id);
  };

  const handleRename = (chat) => {
    renameChat(chat.id, newTitle);
    setEditingChat(null);
    setNewTitle('');
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <button className="new-chat-btn" onClick={handleCreateChat}>
          <FiPlus /> New chat
        </button>
      </div>
      <div className="chat-history">
        {getChats().map((chat) => (
          <div key={chat.id} className={`chat-item ${activeChat === chat.id ? 'active' : ''}`}>
            {editingChat === chat.id ? (
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                onBlur={() => handleRename(chat)}
                onKeyPress={(e) => e.key === 'Enter' && handleRename(chat)}
                autoFocus
              />
            ) : (
              <>
                <FiMessageSquare /> 
                <span onClick={() => setActiveChat(chat.id)}>{chat.title}</span>
                <div className="chat-actions">
                  <FiEdit onClick={() => { setEditingChat(chat.id); setNewTitle(chat.title); }} />
                  <FiTrash2 onClick={() => deleteChat(chat.id)} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
