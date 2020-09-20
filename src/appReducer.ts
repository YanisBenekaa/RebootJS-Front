import { combineReducers } from "redux";
import { profile } from "./profile/reducer";
import { layout } from "./layout/reducer";

export const appReducer = combineReducers({
  profile,
  layout,
});

export type IAppState = ReturnType<typeof appReducer>;
