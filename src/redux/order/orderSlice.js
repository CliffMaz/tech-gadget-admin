import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  orders: [],
  orderInfo: null,
  orderView: false,
  pending: false,
  error: false,
};

const getOrders = createAsyncThunk("order/getOrders", async () => {
  const res = await axios.get(`http://localhost:4001/api/order/all`);

  return res.data;
});

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder: (state, action) => {
      state.orderInfo = action.payload;
    },
    orderOpen: (state) => {
      state.orderView = true;
    },
    orderClose: (state) => {
      state.orderView = false;
    },
  },
  extraReducers: {
    [getOrders.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getOrders.fulfilled]: (state, action) => {
      state.pending = false;
      state.orders = action.payload;
    },
    [getOrders.rejected]: (state) => {
      state.error = true;
    },
  },
});

const orderReducer = orderSlice.reducer;
const orderActions = orderSlice.actions;
export { orderReducer, orderActions, getOrders };
