// Sidebar.js
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Sidebar.css"; // Use module.css extension

const Sidebar = ({ width = 280, children }) => {
  const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState(width);
  const side = useRef();

  // button 클릭 시 토글
  const toggleMenu = () => {
    if (xPosition > 0) {
      setX(0);
      setOpen(true);
    } else {
      setX(width);
      setOpen(false);
    }
  };

  // 사이드바 외부 클릭시 닫히는 함수
  const handleClose = (e) => {
    let sideArea = side.current;
    let sideChildren = side.current.contains(e.target);
    if (isOpen && (!sideArea || !sideChildren)) {
      setX(width);
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
    };
  }, [isOpen]); // Add isOpen to the dependency array

  return (
    <div className={styles.container}>
      <div
        ref={side}
        className={styles.sidebar}
        style={{
          width: `${width}px`,
          height: "100%",
          transform: `translateX(${-xPosition}px)`,
        }}
      >
        <button onClick={toggleMenu} className={styles.button}>
          {isOpen ? (
            <span>X</span>
          ) : (
            <img
              src="images/avatar.png"
              alt="contact open button" // Fix typo in the alt attribute
              className={styles.openBtn}
            />
          )}
        </button>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
export default Sidebar;
