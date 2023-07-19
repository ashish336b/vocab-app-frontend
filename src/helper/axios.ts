import { store } from "@/store";
import authSlice from "@/store/auth/authSlice";
import { message } from "antd";
import axios, { CreateAxiosDefaults } from "axios";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export const axiosInstance = (config: CreateAxiosDefaults) => {
  const instance = axios.create({ ...config });

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const statusCode = error?.response?.status;

      // UNAUTHORIZED
      if (statusCode === 401) {
        if (localStorage.getItem("auth-token")) {
          localStorage.clear();
          store.dispatch(authSlice.actions.resetState());
          message.error("Session expired !");
        }
      } else if (statusCode === 403) {
        history.push("/403");
      }

      return Promise.reject(error);
    }
  );

  return instance;
};
