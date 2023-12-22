// src/components/Header.js
import React, { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { SiStardock } from "react-icons/si";
import { MdSearch, MdLogin } from "react-icons/md";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header({ toggleSidebar }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Implement your search logic here
    console.log("Search submitted:", searchValue);
  };

  return (
    <header className="header">
      <div className="content">
        {/* 헤더 아이콘 */}
        <button onClick={toggleSidebar} className="sidebar-toggle-button">
          <FiAlignJustify />
        </button>

        {/* 헤더 타이틀 */}
        <h2 className="headerLogo">
          <SiStardock className="headerLogoIcon" />
          {/* 헤더 문구 삽입 가능한 곳 */}
          <span>Bit-Univers</span>
        </h2>

        {/* Navigation Links */}
        <nav className="header-navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/Post">Post</Link>
        </nav>

        {/* 검색창 */}
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={handleSearchChange}
          />
          <button type="submit">
            <MdSearch />
          </button>
        </form>

        {/* 추가 아이콘 */}
        <div className="header-buttons">
          <button className="login-button">
            <MdLogin />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
