import React from "react";
import "../styles/Sidebar.css";

import { FaHouse } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoChatboxEllipses } from "react-icons/io5";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <FaHouse className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <FaUser className="sidebarIcon" />
              About
            </li>
            <li className="sidebarListItem">
              <IoChatboxEllipses className="sidebarIcon" />
              Content
            </li>
          </ul>
          {/* 2 */}
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <FaHouse className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <FaUser className="sidebarIcon" />
              About
            </li>
            <li className="sidebarListItem">
              <IoChatboxEllipses className="sidebarIcon" />
              Content
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
