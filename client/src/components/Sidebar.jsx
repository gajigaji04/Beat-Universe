// src/components/NewSidebar.js
import React from "react";
import { FaHouse, FaUser, IoChatboxEllipses } from "react-icons";

function NewSidebar() {
  return (
    <div className="new-sidebar">
      <ul className="new-sidebar-list">
        <li className="new-sidebar-list-item">
          <FaHouse className="new-sidebar-icon" />
          Home
        </li>
        <li className="new-sidebar-list-item">
          <FaUser className="new-sidebar-icon" />
          About
        </li>
        <li className="new-sidebar-list-item">
          <IoChatboxEllipses className="new-sidebar-icon" />
          Content
        </li>
      </ul>
    </div>
  );
}
