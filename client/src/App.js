import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar"; // Import the Sidebar component

import Footer from "./components/Footer.js";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>...</React.StrictMode>);

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sidebarVisible, setSidebarVisible] = useState(false); // Add state for sidebar visibility

  // Define the toggleSidebar function
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  useEffect(() => {
    axios
      .get("/api/data")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <Header onToggleSidebar={toggleSidebar} />
      {sidebarVisible && <Sidebar onClose={() => setSidebarVisible(false)} />}
      <div className="main-content"></div>
      <Footer />
      {loading ? <p>Loading...</p> : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default App;
