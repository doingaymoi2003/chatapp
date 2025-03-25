import React, { useState } from 'react';

const ChatWindow = ({ chatId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-window">
      <h2>Chat with User {chatId}</h2>
      <div className="messages">
        {messages.map(message => (
          <div key={message.id} className="message">
            {message.text}
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;