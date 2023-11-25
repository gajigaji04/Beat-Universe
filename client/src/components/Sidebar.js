// Sidebar.js
import React from "react";
import "../styles/Sidebar.css";

const Sidebar = ({ onClose }) => {
  return (
    <div className="sidebar">
      <button onClick={onClose}>Close Sidebar</button>
      {/* Add your sidebar content here */}
    </div>
  );
};

export default Sidebar;
