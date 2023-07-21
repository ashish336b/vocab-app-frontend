import { profile } from "@/services/auth.service";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

const useAuth = () => {
  const { authUser, authenticated } = useSelector(
    (store: RootState) => store.auth
  );

  const dispatch = useDispatch();

  const fetchUserProfile = () => {
    dispatch<any>(profile());
  };

  return {
    authUser,
    authenticated,
    fetchUserProfile,
  };
};

export default useAuth;
