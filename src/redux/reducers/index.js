import { combineReducers } from "redux";

import listReducers from "./list.reducers";

const moduleState = {
  list: listReducers,
};

export default combineReducers(moduleState);
