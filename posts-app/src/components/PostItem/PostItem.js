// src/PostItem.js
import React from "react";

const PostItem = ({ post, onEdit }) => {
  return (
    <div className="post-item">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <button onClick={() => onEdit(post)}>Edit</button>
    </div>
  );
};

export default PostItem;
