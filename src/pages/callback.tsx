import Guest from "@/hoc/Guest";
import { googleAuthCallback } from "@/services/auth.service";
import authSlice from "@/store/auth/authSlice";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";

const Callback = () => {
  const dispatch = useDispatch();

  useQuery({
    queryKey: "token",
    queryFn: () => {
      return googleAuthCallback();
    },
    onSuccess: (data) => {
      const token = data.token as string;
      localStorage.setItem("auth-token", token);
      dispatch(authSlice.actions.setToken(token));
    },
    enabled: !localStorage.getItem("auth-token"),
  });
  return (
    <Guest>
      <p className="text-center p-2 m-2"></p>
    </Guest>
  );
};

export default Callback;
