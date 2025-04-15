// https://jsonplaceholder.typicode.com/users

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncUsers = createAsyncThunk(
  "user/getAsyncUsers",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  isLoading: false,
  data: [],
  error: "",
};

 const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [getAsyncUsers.pending]: (state, action) => {
      state.isLoading = true;
      state.date = [];
      state.error = "";
    },
    [getAsyncUsers.fulfilled]: (state, action) => {
      state.isLoading = false
      state.date = action.payload
    }
    [getAsyncUsers.rejected] : (state,action) => {
      state.isLoading = false
      state.data=[]
      state.error = action.payload
    }
  },
});
const {} = userSlice.actions
export default userSlice.reducer