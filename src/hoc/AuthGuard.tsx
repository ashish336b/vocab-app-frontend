import useAuth from "@/hooks/useAuth";
import { RootState } from "@/store";
import React, { PropsWithChildren, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const AuthGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const { authenticated, authUser } = useSelector(
    (state: RootState) => state.auth
  );
  const navigate = useNavigate();

  const { fetchUserProfile } = useAuth();

  useEffect(() => {
    if (!authenticated) {
      navigate("/");
    } else if (!authUser) {
      fetchUserProfile();
    }
  }, [authenticated, authUser]);

  return <div>{authenticated ? children : ""}</div>;
};
