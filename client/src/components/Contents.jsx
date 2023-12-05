import React from 'react';
import Content from './Contents';

const App = () => {
  const posts = [
    // Your array of posts
  ];

  return (
    <div className="app">
      <Content posts={posts} />
    </div>
  );
};

export default App;
