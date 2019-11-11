import { NameType } from "./types";

const initialState = {
  value: ""
};

function nameReducer(state = initialState, action) {
  switch (action.type) {
    case NameType.CHANGE: {
      return { value: action.value };
    }
    default: {
      return state;
    }
  }
}

export default nameReducer;
