import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoggedIn: false,
  userData: "",
  users: [],
  pending: false,
  successfull: false,
  userError: false,
  userPending: false,
  userSuccessfull: false,
  error: false,
};

const login = createAsyncThunk("user/login", async (user) => {
  const res = await axios.post(`http://localhost:4001/api/auth/login`, user);

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
      state.userData.user = actions.payload;
    },
    logOut: (state) => {
      state.userData = {};
      state.isLoggedIn = false;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.pending = true;
      state.error = false;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.pending = false;
      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, (state) => {
      state.error = true;
    });
    builder.addCase(login.pending, (state) => {
      state.userPending = true;
      state.userError = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.userPending = false;
      state.userData = action.payload;
      state.isLoggedIn = true;
    });
    builder.addCase(login.rejected, (state) => {
      state.userError = true;
    });
  },
});

const userActions = userSlice.actions;
const usersReducer = userSlice.reducer;

export { userActions, usersReducer, getUsers, login, verify };
