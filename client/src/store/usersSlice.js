import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as httpClient from "../api";

export const getAllUsers = createAsyncThunk(
  "users/getAllUsers",
  async (params = {}, thunkAPI) => {
    try {
      const {data:{data}} = await httpClient.getUsers(params);
      return data;
    } catch (error) {
      const { rejectWithValue } = thunkAPI;
      return rejectWithValue(error);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    error: null,
    isFetching: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, (state, action) => {
      state.isFetching = true;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
    });
    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    });
    //3 створення
  },
});

// const { loadUsers } = usersSlice.actions;
export default usersSlice.reducer;
