import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { payload, token } = action.payload;
      state.user = payload;
      state.token = token;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setCredentials, logout, updateUser } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state?.auth?.user;
export const selectCurrentRole = (state) => state?.auth?.user?.role;
export const selectIsAuthenticated = (state) => state?.auth?.isAuthenticated;
export const selectAuthToken = (state) => state?.auth?.token;
