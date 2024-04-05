import { configureStore } from "@reduxjs/toolkit";
import membersReducer from "../features/members/membersSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    members: membersReducer,
    user: userReducer,
  },
});
