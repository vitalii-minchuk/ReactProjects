import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Reactions {
  thumbsUp: number;
  wow: number;
  heart: number;
  rocket: number;
  coffee: number;
}

export interface Post {
  id?: string;
  title: string;
  content: string;
  userId: string;
  createdAt: string
  reactions: Reactions
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
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            }
          }
        };
      },
    },
    reactionAdded(state, action: PayloadAction<{id: string, reaction: keyof Reactions}>) {
      const { id , reaction } = action.payload
      const existingPost = state.posts.find(post => post.id === id)
      if (existingPost) {
        existingPost.reactions[reaction]++
      }
    }
  },
});

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;