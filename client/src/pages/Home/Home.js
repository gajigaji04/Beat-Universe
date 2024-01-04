import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-image">
        <img
          src="/images/pexels-drift-shutterbug-2085998.jpg"
          alt="pexels-drift-shutterbug-2085998"
        />
      </div>
      {/* Content */}
      <div className="content">
        <h1>Bit-Universe</h1>
        <p>간단한 React-Node.js 홈페이지</p>
      </div>

      {/* Side Image */}
      <div className="side-image">
        <img src="/images/side-image.jpg" alt="Side Image" />
      </div>
    </div>
  );
}

export default Home;
