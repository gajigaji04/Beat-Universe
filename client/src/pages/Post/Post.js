// src/pages/Post/Post.js
import React from "react";
import "./Post.css";

function Post() {
  return (
    <div className="post-container">
      <div className="post-page-title">
        <h2>Post Page</h2>
      </div>
      <div className="post-list">
        {[1, 2, 3, 4, 5].map((index) => (
          <div key={index} className="post-box">
            <img
              src={`https://via.placeholder.com/300?text=Thumbnail${index}`}
              alt={`Thumbnail ${index}`}
              className="post-image"
            />
            <p className="post-content">
              <h4>Title</h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;