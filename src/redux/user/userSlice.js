import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoggedIn: true,
  userData: { username: "cliford Mazibuko", profileDisplay: "adsfew" },
  users: [],
  pending: false,
  successfull: false,
  error: false,
};

const login = createAsyncThunk("user/login", async (user) => {
  const res = await axios.get(`http://localhost:4001/api/auth/login`, user);

  return res.data;
});

const verify = createAsyncThunk("user/verify", async (user) => {
  const res = await axios.get(`http://localhost:4001/api/auth/verify`, user);

  return res.data;
});

const getUsers = createAsyncThunk("user/getUsers", async () => {
  const res = await axios.get(`http://localhost:4001/api/user/all`);

  return res.data;
});

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

  extraReducers: {
    [getUsers.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.pending = false;
      state.users = action.payload;
    },
    [getUsers.rejected]: (state) => {
      state.error = true;
    },
  },
});

const userActions = userSlice.actions;
const usersReducer = userSlice.reducer;

export { userActions, usersReducer, getUsers, login, verify };
