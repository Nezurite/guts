import Message from './Message';

export default function Chat() {
  const messages = [
    { text: 'Hello! How can I help you today?', isUser: false },
    { text: 'Hey, what’s the weather like?', isUser: true },
  ];

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, i) => (
          <Message key={i} text={msg.text} isUser={msg.isUser} />
        ))}
      </div>
      <div className="input-area">
        <input type="text" placeholder="Type a message..." />
        <button>Send</button>
      </div>
    </div>
  );
}
