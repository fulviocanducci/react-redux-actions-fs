import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CounterIncrementAction,
  CounterDecrementAction
} from "../reducers/counter/actions";

function Counter() {
  const value = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  const handleDispatchIcremenent = () => dispatch(CounterIncrementAction());
  const handleDispatchDecrement = () => dispatch(CounterDecrementAction());
  return (
    <div className="row">
      <div className="col s3 center-align" style={{ marginTop: "23px" }}>
        <button
          className="btn-floating btn-large waves-effect waves-light red"
          onClick={handleDispatchDecrement}
        >
          <i className="material-icons">remove</i>
        </button>
      </div>
      <div className="col s6 center-align" style={{ marginTop: "0px" }}>
        <h3>{value}</h3>
      </div>
      <div className="col s3 center-align" style={{ marginTop: "23px" }}>
        <button
          className="btn-floating btn-large waves-effect waves-light blue"
          onClick={handleDispatchIcremenent}
        >
          <i className="material-icons">add</i>
        </button>
      </div>
    </div>
  );
}

export default Counter;
