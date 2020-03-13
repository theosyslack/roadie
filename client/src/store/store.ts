import { createStore, combineReducers } from "redux";
import results from "./reducers/results";
import search from "./reducers/search";

export default createStore(
  combineReducers({
    results,
    search
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
