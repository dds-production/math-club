import { socket } from './socket.service';

const API_BASE_URL = process.env.BASE_URL;

const chatService = {
  getChats: async () => {
    const response = await fetch(`${API_BASE_URL}/chat`); // !!!!
    if (!response.ok) {
      throw Error('Fail to fetch chats');
    }
    const chats = await response.json();
    return chats;
  },
  getMessages: async (chatId) => {
    const response = await fetch(`${API_BASE_URL}/chat/${chatId}`);
    if (!response.ok) {
      throw Error('Fail to het chat messages');
    }
    const chat = await response.json();
    return chat;
  },
  sendMessage: async (chatId, message) => {
    const response = await fetch(
      `${API_BASE_URL}/chat/${chatId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      },
    );
    if (!response.ok) {
      throw Error('Fail to send message');
    }
    socket.emit('add message', message, chatId);
    const chat = await response.json();
    return chat;
  },
};

export default chatService;
