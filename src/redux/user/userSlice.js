import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userData: { name: "cliford", surname: "Mazibuko" },
  users: [],
  pending: false,
  successfull: false,
  error: false,
};

const getUsers = createAsyncThunk("user/getUsers", async () => {
  const res = await axios.get(`http://localhost:4001/api/user/all`);
  console.log("thunk", res.data);
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

export { userActions, usersReducer, getUsers };
