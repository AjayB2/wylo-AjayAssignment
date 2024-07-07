// src/CreatePost.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPost, editPost } from "./postsSlice";

const CreatePost = ({ editingPost, onSave }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setContent(editingPost.content);
    }
  }, [editingPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      setError("Both title and content are required.");
      return;
    }

    const newPost = { title, content };
    if (editingPost) {
      dispatch(editPost({ ...editingPost, ...newPost }));
    } else {
      dispatch(addPost(newPost));
    }

    setTitle("");
    setContent("");
    setError("");
    setSuccess("Post saved successfully!");
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
      <button type="submit">Save</button>
    </form>
  );
};

export default CreatePost;
