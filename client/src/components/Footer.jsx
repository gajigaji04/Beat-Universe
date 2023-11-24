import React from "react";
import "../styles/Footer.css";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2023 Bit-Universe</p>
      <p>
        <h2>Connect</h2>
      </p>
      <p>
        <FaGithub />
      </p>
    </footer>
  );
}

export default Footer;
