import { createSlice } from "@reduxjs/toolkit";

const authInitialState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: authInitialState,
  reducers: {
    onLogin(state) {
      state.isAuthenticated = true;
    },
    onLogout(state) {
      state.isAuthenticated = false;
    },
  },
});



export const authActions = authSlice.actions;

export default authSlice.reducer;
