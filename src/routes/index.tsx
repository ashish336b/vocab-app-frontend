import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/index";
import Callback from "@/pages/callback";
import Dashboard from "@/pages/dashboard";
import Error403 from "@/pages/403/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/callback",
    element: <Callback />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/403",
    element: <Error403 />,
  },
]);
