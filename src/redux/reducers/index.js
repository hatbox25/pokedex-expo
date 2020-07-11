import { combineReducers } from "redux";

import listReducers from "./list.reducers";
import detailReducers from "./detail.reducers";

const moduleState = {
  list: listReducers,
  detail: detailReducers,
};

export default combineReducers(moduleState);
