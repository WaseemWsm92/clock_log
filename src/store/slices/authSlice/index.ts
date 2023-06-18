import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  user: {},
  isAuthenticated: false,
  resetSuccess: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    // login(state, action) {
    //   state.isAuthenticated = true;
    //   state.user = action.payload.user;
    // },

    // logout(state) {
    //   state.isAuthenticated = false;
    //   state.user = {};
    // },
    setResetPasswordSuccess(state, action) {
      state.resetSuccess = action.payload;
      console.log( state.resetSuccess );
      
    },
  },
});
export const { setResetPasswordSuccess } = authSlice.actions
export default authSlice;
