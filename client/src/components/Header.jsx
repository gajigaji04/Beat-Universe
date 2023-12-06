import React, { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { SiStardock } from "react-icons/si";
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
        <h1>
          <SiStardock className="headerLogoIcon" />
        </h1>

        {/* 추가 아이콘 */}
      </div>
    </header>
  );
}

export default Header;
