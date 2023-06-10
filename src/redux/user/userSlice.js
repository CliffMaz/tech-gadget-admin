import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: { name: "cliford", surname: "Mazibuko" },
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, actions) => {
      state.userData = actions.payload;
    },
    logOut: (state) => {
      state.userData = {};
    },
  },
});

const userActions = userSlice.actions;
const usersReducer = userSlice.reducer;

export { userActions, usersReducer };
