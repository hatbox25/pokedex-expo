import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
const initialState = {};

const midleware = [thunk];
let Store = null;
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  Store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...midleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  Store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...midleware))
  );
}

export default Store;
