import React from "react";
import "../styles/Header.css";
import { FiAlignJustify } from "react-icons/fi";

function Header({ toggleSidebar }) {
  return (
    <header className="header">
      <div className="content">
        {/* 사이드바 토글 버튼 */}
        <FiAlignJustify>
          <button onClick={toggleSidebar}>Toggle Sidebar</button>/
        </FiAlignJustify>

        <div>
          <h1>Beat-Universe_logo</h1>
        </div>

        <nav className="navigation">
          <ul>
            <li>메뉴1</li>
            <li>메뉴2</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
