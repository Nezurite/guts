import { useState, useEffect } from 'react';
import Message from './Message';
import { useChatStore } from '../lib/chatStore';

export default function Chat({ activeChat }) {
  const [input, setInput] = useState('');
  const { getChats, addMessage } = useChatStore();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (activeChat) {
      const chat = getChats().find(c => c.id === activeChat);
      setMessages(chat?.messages || []);
    }
  }, [activeChat]);

  const handleSend = () => {
    if (!input.trim() || !activeChat) return;
    
    const newMessage = {
      id: Date.now().toString(),
      text: input,
      isUser: true,
      timestamp: new Date().toISOString()
    };

    addMessage(activeChat, newMessage);
    setMessages([...messages, newMessage]);
    setInput('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg) => (
          <Message key={msg.id} text={msg.text} isUser={msg.isUser} />
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}
