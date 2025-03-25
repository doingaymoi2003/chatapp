import React, { useState } from 'react';

const ChatList = ({ onSelectChat }) => {
  const [search, setSearch] = useState('');
  const [chats, setChats] = useState([
    {      id: 1, 
      name: 'John Doe 1',
      avatar: require('../assets/avatars/img1.jpg'),
      lastMessage: 'Xin chào!',
      time: '10:30 AM'},
    {      id: 1, 
      name: 'John Doe 2',
      avatar: require('../assets/avatars/img1.jpg'),
      lastMessage: 'Xin chào!',
      time: '10:30 AM'},
    {      id: 1, 
      name: 'John Doe 3',
      avatar: require('../assets/avatars/img1.jpg'),
      lastMessage: 'Xin chào!',
      time: '10:30 AM'},
    {      id: 1, 
      name: 'John Doe 4',
      avatar: require('../assets/avatars/img1.jpg'),
      lastMessage: 'Xin chào!',
      time: '10:30 AM'},
    // Thêm các người chat khác
  ]);

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="chat-list">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
 <ul>
  {filteredChats.map(chat => (
    <li key={chat.id} onClick={() => onSelectChat(chat.id)} className="chat-item">
      <div className="user-avatar">
        <img src={chat.avatar} alt={chat.name} />
      </div>
      <div className="user-info">
        <h4>{chat.name}</h4>
        <p className="last-message">{chat.lastMessage}</p>
      </div>
      <div className="message-time">
        {chat.time}
      </div>
    </li>
  ))}
</ul> 
    </div>
  );
};

export default ChatList;