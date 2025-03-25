import React from 'react';
import { MdOutlineChat, MdOutlineLocalOffer, MdEditDocument, MdOutlineSettings } from "react-icons/md";
import { FaHome, FaRegCalendarAlt } from "react-icons/fa";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="avatar">
        <img src='#' alt="Avatar" />
      </div>
      <div className="username">
        <h3 >John Doe</h3>
      </div>
      <div className="menu">
      <button>
          <i className="icon"><FaHome /></i>
          <span>PROPERTIES</span>
      </button>
        <button>
          <i className="icon"><MdOutlineChat /></i>
          <span>CHAT</span>
          </button>
          <button>
          <i className="icon"><FaRegCalendarAlt /></i>
          <span>CALENDAR</span>
          </button>        <button>
          <i className="icon"><MdOutlineLocalOffer /></i>
          <span>OFFERS</span>
          </button>        <button>
          <i className="icon"><MdEditDocument /></i>
          <span>DOCUMENT</span>
          </button>        <button>
          <i className="icon"><MdOutlineSettings /></i>
          <span>SETTING</span>
          </button>
      </div>
    </div>
  );
};

export default Sidebar;