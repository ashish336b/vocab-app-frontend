import authSlice from "@/store/auth/authSlice";
import React, { PropsWithChildren, useEffect } from "react";
import { useDispatch } from "react-redux";

const Main: React.FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useDispatch();
  const init = () => {
    const token = localStorage.getItem("auth-token");
    if (token) {
      dispatch(authSlice.actions.setToken(token));
    }
  };

  useEffect(() => {
    init();
  }, []);

  return <>{children}</>;
};

export default Main;
