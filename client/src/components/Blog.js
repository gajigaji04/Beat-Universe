import React from 'react';
import BlogPost from './BlogPost';

const Blog = () => {
  const blogPosts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
    // Add more blog posts as needed
  ];

  return (
    <div>
      <h1>My Blog</h1>
      {blogPosts.map((post) => (
        <BlogPost key={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default Blog;
