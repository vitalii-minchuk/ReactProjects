import { createSlice } from "@reduxjs/toolkit";

export interface User {
  userId?: string;
  name: string;
};

export interface PostsState {
  users: User[]
};

const initialState: PostsState = {
  users: [
    {
      userId: "1",
      name: "Bob",
    },
    {
      userId: "2",
      name: "Mary",
    },
    {
      userId: "3",
      name: "Sophy",
    }
  ],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
  },
});

export const {  } = usersSlice.actions;

export default usersSlice.reducer;