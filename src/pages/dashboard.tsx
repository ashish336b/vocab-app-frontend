import { AuthGuard } from "@/hoc/AuthGuard";
import authSlice from "@/store/auth/authSlice";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  return (
    <AuthGuard>
      <h1>Dashboard</h1>
      <button
        onClick={() => {
          localStorage.clear();
          dispatch(authSlice.actions.resetState());
        }}
      >
        logout
      </button>
    </AuthGuard>
  );
};

export default Dashboard;
