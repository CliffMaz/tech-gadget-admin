import { configureStore } from "@reduxjs/toolkit";
import { menuReducer } from "../menu/menuSlice";
import { usersReducer } from "../user/userSlice";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    user: usersReducer,
  },
});

export default store;
