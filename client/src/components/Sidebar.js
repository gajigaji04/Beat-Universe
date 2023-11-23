import React from "react";

const Sidebar = () => {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Orders
            </a>
          </li>
          {/* 추가적인 메뉴 아이템들 */}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
