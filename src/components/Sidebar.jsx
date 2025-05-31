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
        <div className="chat-item">
          <FiMessageSquare /> What is AI?
        </div>
      </div>
      <div className="sidebar-footer">
        <button className="settings-btn">
          <FiSettings /> Settings
        </button>
      </div>
    </div>
  );
}
