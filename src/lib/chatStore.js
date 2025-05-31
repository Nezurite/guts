// Local storage-based chat manager
export const useChatStore = (() => {
  const STORAGE_KEY = 'nixxel_chat_demo';
  
  // Get all chats
  const getChats = () => {
    if (typeof window === 'undefined') return [];
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || [];
  };

  // Save all chats
  const saveChats = (chats) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(chats));
  };

  // Create new chat
  const createChat = (title = 'New Chat') => {
    const newChat = {
      id: Date.now().toString(),
      title,
      messages: []
    };
    const chats = [...getChats(), newChat];
    saveChats(chats);
    return newChat;
  };

  // Delete chat
  const deleteChat = (id) => {
    const chats = getChats().filter(chat => chat.id !== id);
    saveChats(chats);
  };

  // Rename chat
  const renameChat = (id, newTitle) => {
    const chats = getChats().map(chat => 
      chat.id === id ? { ...chat, title: newTitle } : chat
    );
    saveChats(chats);
  };

  // Add message to chat
  const addMessage = (chatId, message) => {
    const chats = getChats().map(chat => 
      chat.id === chatId 
        ? { ...chat, messages: [...chat.messages, message] } 
        : chat
    );
    saveChats(chats);
  };

  return {
    getChats,
    createChat,
    deleteChat,
    renameChat,
    addMessage
  };
})();
