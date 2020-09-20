import { changeDrawerContentCase } from "./cases/changeDrawerContentCase";
import { CHANGE_DRAWER_CONTENT, ILayoutAction, ILayoutState } from "./types";
import { defaultLayoutState } from "./utils/defaultLayoutState";

export function layout(
  state: ILayoutState = defaultLayoutState(),
  action: ILayoutAction
): ILayoutState {
  switch (action.type) {
    case CHANGE_DRAWER_CONTENT:
      return changeDrawerContentCase(state, action);
    default:
      return state;
  }
}
