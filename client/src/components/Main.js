import React from "react";
import Sidebar from "./Sidebar";

const Main = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        {/* 추가적인 메인 컨텐츠 영역 */}
      </div>
    </div>
  );
};

export default Main;
