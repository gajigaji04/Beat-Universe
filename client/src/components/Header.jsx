// Header.jsx
import React from "react"; // Remove useState from React import
import { FiAlignJustify, FiAward } from "react-icons/fi";
import "../styles/Header.css";

function Header({ toggleSidebar }) {
  return (
    <header className="header">
      <div className="content">
        {/* 헤더 아이콘 */}
        <button onClick={toggleSidebar} className="sidebar-toggle-button">
          <FiAlignJustify />
        </button>

        {/* 헤더 타이틀 */}
        <h1>Header Title</h1>

        {/* 추가 아이콘 */}
        <FiAward />
      </div>
    </header>
  );
}

export default Header;
