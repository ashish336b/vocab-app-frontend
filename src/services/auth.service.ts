import { axiosInstance } from "@/helper/axios";
import { store } from "@/store";
import authSlice from "@/store/auth/authSlice";
import { Dispatch } from "@reduxjs/toolkit";

export const googleAuthCallback = async () => {
  const response = await axiosInstance({ withCredentials: true }).get(
    "http://localhost:3000/login/get-token"
  );
  return response?.data;
};

export const getUserProfile = async (token: string) => {
  const response = await axiosInstance({
    headers: { Authorization: `Bearer ${token}` },
  }).get("http://localhost:3000/login/profile");

  return response.data;
};

export const profile = () => {
  return async (dispatch: Dispatch) => {
    const response = await axiosInstance({
      headers: {
        Authorization: `Bearer ${store.getState().auth.token}`,
      },
    }).get("http://localhost:3000/login/profile");
    dispatch(authSlice.actions.setAuthUser(response.data));
  };
};
