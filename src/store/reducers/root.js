import { combineReducers } from "redux";
import counterReducer from "./counter";
import resultReducer from "./result";

export default combineReducers({
  counter: counterReducer,
  result: resultReducer,
});
