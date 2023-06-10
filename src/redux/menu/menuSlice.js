import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  opened: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    open: (state, actions) => {
      state.opened = actions.payload;
    },
  },
});

const menuReducer = menuSlice.reducer;
const menuActions = menuSlice.actions;
export { menuReducer, menuActions };
