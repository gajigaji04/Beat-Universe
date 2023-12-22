// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Post from "./pages/Post/Post";
import "./App.css";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div>
        <Header toggleSidebar={toggleSidebar} />
        <div className="app-container">
          {/* Sidebar */}
          {isSidebarOpen && <div className="sidebar">Sidebar Content</div>}

          {/* Routes for different pages */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/post" element={<Post />} />
          </Routes>

          {/* Footer inside the app-container */}
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
