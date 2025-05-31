import { FiPlus, FiMessageSquare, FiSettings } from 'react-icons/fi';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <button className="new-chat-btn">
          <FiPlus /> New chat
        </button>
      </div>
      <div className="chat-history">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="chat-item">
            <FiMessageSquare /> Chat {i + 1}
          </div>
        ))}
      </div>
      <div className="sidebar-footer">
        <button className="settings-btn">
          <FiSettings /> Settings
        </button>
      </div>
    </div>
  );
}
