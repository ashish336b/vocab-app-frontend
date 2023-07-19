import { createSlice } from "@reduxjs/toolkit";

export interface AuthUser {
  id: number;
  email: string;
}

export interface AuthStore {
  authUser: AuthUser | undefined;
  authenticated: boolean;
  token: string | undefined;
}

const initialState: AuthStore = {
  authenticated: false,
  authUser: undefined,
  token: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // LOGIN SUCCESS
    setAuthUser(state, action) {
      state.authUser = action.payload.user;
      state.authenticated = true;
    },

    setToken(state, actions) {
      state.token = actions.payload;
      state.authenticated = true;
    },

    // LOGIN FAIL
    resetState(state) {
      state.authUser = undefined;
      state.token = undefined;
      state.authenticated = false;
    },

    // Set profile
    fetchProfileSuccess(state, action) {
      state.authUser = action.payload;
    },
  },
});

export default authSlice;
