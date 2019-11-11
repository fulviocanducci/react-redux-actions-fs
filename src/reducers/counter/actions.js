import CounterType from "./types";

function CounterIncrementAction() {
  return { type: CounterType.INCREMENT };
}

function CounterDecrementAction() {
  return { type: CounterType.DECREMENT };
}

export { CounterIncrementAction, CounterDecrementAction };
