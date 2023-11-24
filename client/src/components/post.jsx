// 프론트엔드의 컴포넌트 파일
import React, { useState } from "react";
import axios from "axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreatePost = async () => {
    try {
      const response = await axios.post("/api/posts", { title, content });
      console.log("Created post:", response.data);
      // 새로운 포스트가 생성되었을 때의 로직 추가
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div>
      <h2>Create Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleCreatePost}>Create Post</button>
    </div>
  );
};

export default CreatePost;
