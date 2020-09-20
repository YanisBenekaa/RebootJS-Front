import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { appReducer } from "./appReducer";

export const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
