import { createStore, combineReducers } from "redux";
import facilities from "./reducers/facilities";
import search from "./reducers/search";

export default createStore(
  combineReducers({
    facilities,
    search
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
