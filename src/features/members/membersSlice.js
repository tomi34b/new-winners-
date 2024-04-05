import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  members: [],
};

export const membersSlice = createSlice({
  name: "members",
  initialState,
  reducers: {
    addMembers: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.members = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMembers } = membersSlice.actions;

export default membersSlice.reducer;
