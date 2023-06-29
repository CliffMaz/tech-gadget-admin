import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customerInfo: null,
  customerView: false,
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setCustomer: (state, action) => {
      state.customerInfo = action.payload;
    },
    customerOpen: (state) => {
      state.customerView = true;
    },
    customerClose: (state) => {
      state.customerView = false;
    },
  },
});

const customerReducer = customerSlice.reducer;
const customerActions = customerSlice.actions;
export { customerReducer, customerActions };
