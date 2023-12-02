// Sidebar.js
import React from "react";
import { FiAward } from "react-icons/fi"; // 필요한 아이콘들을 import
import "../styles/Sidebar.css"; // 스타일 파일을 import

function Sidebar({ isOpen, closeSidebar }) {
  return (
    <nav className={`sidebar ${isOpen ? "open" : ""}`}>
      {/* 사이드바 아이콘 */}
      <button onClick={closeSidebar} className="close-sidebar-button">
        <FiAward />
      </button>

      {/* 사이드바 메뉴 */}
      <ul>
        <li>메뉴 1</li>
        <li>메뉴 2</li>
        <li>메뉴 3</li>
      </ul>
    </nav>
  );
}

export default Sidebar;
