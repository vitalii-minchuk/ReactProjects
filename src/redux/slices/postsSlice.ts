import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Post {
  id?: string;
  title: string;
  content: string;
  userId: string;
  createdAt: string
};

export interface PostsState {
  posts: Post[]
};

const initialState: PostsState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: { 
      reducer(state, action: PayloadAction<Post>) {
        state.posts.push(action.payload)
      },
      prepare(post, author) {
        return {
          payload: {
            id: nanoid(),
            title: post.title,
            content: post.content,
            userId: author,
            createdAt: new Date().toISOString(),
          }
        };
      },
    },
  },
});

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;