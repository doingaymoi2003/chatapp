import React from 'react';
import { FaBell } from "react-icons/fa"
const Header = () => {
  return (
    <div className="header">
    <div className="status-sale">
      <span>Status: Sale</span>
      </div>
      <div className="notification-icon">
      <FaBell />
      </div>
    </div>
  );
};

export default Header;