import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    opened: (state, actions) => {
      state.open = actions.payload;
    },
  },
});

const menuReducer = menuSlice.reducer;
const menuActions = menuSlice.actions;
export { menuReducer, menuActions };
