import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import counterSlice from "@/store/counter/counterSlice";

const Home = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const add = () => {
    dispatch(counterSlice.actions.incrementByAmount(10));
  };
  
  return (
    <>
      <Button onClick={add}>Increment</Button>
      <p>{count}</p>
    </>
  );
};

export default Home;
