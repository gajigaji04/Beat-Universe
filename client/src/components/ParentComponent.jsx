// ParentComponent.jsx
import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function ParentComponent() {
  const [isOpen, toggleSidebar] = useState(false);

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {/* Rest of your content */}
    </div>
  );
}

export default ParentComponent;
