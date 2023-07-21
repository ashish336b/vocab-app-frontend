import Guest from "@/hoc/Guest";
import { Button } from "antd";

const Home = () => {
  const add = () => {
    window.location.href = `${
      import.meta.env.VITE_BACKEND_BASE_URL
    }/login/google`;
  };

  return (
    <Guest>
      <p className="text-center p-2 m-2">
        <Button onClick={add}>Login With Google</Button>
      </p>
    </Guest>
  );
};

export default Home;
