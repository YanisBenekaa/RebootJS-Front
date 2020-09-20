import { IChangeDrawerContentAction, ILayoutState } from "../types";

export function changeDrawerContentCase(
  state: ILayoutState,
  action: IChangeDrawerContentAction
): ILayoutState {
  return {
    ...state,
    drawerContent: action.content,
    showDrawer: action.showDrawer,
  };
}
