"use client";

import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: {
      reducer: (state, action) => {
        state.users.push(action.payload);
      },
      prepare: (user) => {
        const id = nanoid();
        return { payload: { id, ...user } };
      },
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
