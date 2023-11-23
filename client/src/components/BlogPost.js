import React from 'react';
import '../styles/BlogPost.css';

const BlogPost = ({ title, content }) => {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default BlogPost;
