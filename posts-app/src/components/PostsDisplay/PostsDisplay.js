// src/PostsDisplay.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "./PostItem";
import { fetchPosts } from "./postsSlice";

const PostsDisplay = ({ onEdit }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.items);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="posts-display">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default PostsDisplay;
