import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  const toggleCounterHandler = () => {
    dispatch({ type: "TOGGLE" });
  };
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };
  const incrementHandlerByValue = () => {
    dispatch({ type: "INCREMENTBYVALUE", value: 10 });
  };
  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}

      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={incrementHandlerByValue}>increment By 10</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
