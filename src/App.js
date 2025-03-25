import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';
import './App.css';

function App() {
  const [selectedChatId, setSelectedChatId] = useState(null);

  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="chat-container">
          <ChatList onSelectChat={setSelectedChatId} />
          {selectedChatId && <ChatWindow chatId={selectedChatId} />}
        </div>
      </div>
    </div>
  );
}

export default App;