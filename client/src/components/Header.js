// Header.js
import React from "react";
import "../styles/Header.css";

const Header = ({ onToggleSidebar }) => {
  return (
    <header className="header">
      <sidebar />
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>
      </nav>
      <div className="header">
        <button onClick={onToggleSidebar}>Toggle Sidebar</button>
      </div>
    </header>
  );
};

export default Header;
