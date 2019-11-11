import { combineReducers } from "redux";

import counterReducer from "./counter";
import nameReducer from "./name";

const reducers = combineReducers({
  counter: counterReducer,
  name: nameReducer
});

export default reducers;
