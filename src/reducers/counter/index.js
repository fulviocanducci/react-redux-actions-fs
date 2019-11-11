import CounterType from "./types";

const initialState = {
  value: 0
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case CounterType.INCREMENT: {
      return { value: state.value + 1 };
    }
    case CounterType.DECREMENT: {
      return { value: state.value - 1 };
    }
    default: {
      return state;
    }
  }
}
