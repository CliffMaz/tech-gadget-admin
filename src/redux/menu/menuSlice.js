import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  opened: false,

  customerView: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    open: (state, actions) => {
      state.opened = actions.payload;
    },
    customerOpen: (state) => {
      state.customerView = true;
    },
    customerClose: (state) => {
      state.customerView = false;
    },
  },
});

const menuReducer = menuSlice.reducer;
const menuActions = menuSlice.actions;
export { menuReducer, menuActions };
