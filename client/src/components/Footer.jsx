import React from "react";
import "../styles/Footer.css";
import { IoIosMailUnread } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { SiBloglovin } from "react-icons/si";

const Footer = () => {
  const handleMailClick = () => {
    // 사용자의 기본 이메일 클라이언트를 열어서 새 이메일 작성 창을 띄웁니다.
    window.location.href = "mailto:gajigaji0908@gmail.com";
  };

  const handleGithubClick = () => {
    // Github으로 이동하는 로직 추가
    window.location.href = "https://github.com/gajigaji04";
  };

  const handleBlogClick = () => {
    // 블로그로 이동하는 로직 추가
    window.location.href = "https://velog.io/@gajigaji04/posts";
  };

  return (
    <div className="wrapper">
      <footer className="contentWrapper">
        <p className="mailInfo">
          <IoIosMailUnread className="mailIcon" onClick={handleMailClick} />
          <FaGithub className="githubIcon" onClick={handleGithubClick} />
          <SiBloglovin className="blogIcon" onClick={handleBlogClick} />{" "}
        </p>
        <p>&copy; {new Date().getFullYear()} React-Node.js Web site</p>
      </footer>
    </div>
  );
};

export default Footer;
