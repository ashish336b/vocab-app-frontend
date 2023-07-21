import useAuth from "@/hooks/useAuth";
import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Guest: React.FC<PropsWithChildren> = ({ children }) => {
  const { authenticated, authUser, fetchUserProfile } = useAuth();
  const navigate = useNavigate();
  /**
   *  REDIRECT IN CASE OF UNAUTHENTICATED
   */
  useEffect(() => {
    if (authenticated) {
      navigate("/dashboard");
    }

    if (authenticated && !authUser) {
      fetchUserProfile();
    }
  }, [authenticated, authUser]);
  return <>{!authenticated ? children : ""}</>;
};

export default Guest;
