import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CounterIncrementAction,
  CounterDecrementAction
} from "../reducers/counter/actions";

function Counter() {
  const value = useSelector(x => x.counter.value);
  const dispatch = useDispatch();
  const dispatchIcremenent = () => dispatch(CounterIncrementAction());
  const dispatchDecrement = () => dispatch(CounterDecrementAction());
  return (
    <>
      <div>
        <h3>{value}</h3>
      </div>
      <button onClick={dispatchIcremenent}>Increment</button>
      <button onClick={dispatchDecrement}>Decrement</button>
    </>
  );
}

export default Counter;
