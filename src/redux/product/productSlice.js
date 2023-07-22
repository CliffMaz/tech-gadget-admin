import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  productInfo: null,
  productView: false,
  pending: false,
  error: false,
};

const getProducts = createAsyncThunk("product/getProducts", async () => {
  const res = await axios.get(`http://localhost:4001/api/product/all`);

  return res.data;
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.productInfo = action.payload;
    },
    productOpen: (state) => {
      state.productView = true;
    },
    productClose: (state) => {
      state.productView = false;
    },
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.pending = false;
      state.products = action.payload;
    },
    [getProducts.rejected]: (state) => {
      state.error = true;
    },
  },
});

const productReducer = productSlice.reducer;
const productActions = productSlice.actions;
export { productReducer, productActions, getProducts };
