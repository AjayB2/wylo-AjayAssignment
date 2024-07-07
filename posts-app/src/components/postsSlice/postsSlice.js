// src/postsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    items: [],
  },
  reducers: {
    addPost: (state, action) => {
      state.items.push(action.payload);
    },
    editPost: (state, action) => {
      const index = state.items.findIndex(
        (post) => post.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const { addPost, editPost } = postsSlice.actions;
export default postsSlice.reducer;
