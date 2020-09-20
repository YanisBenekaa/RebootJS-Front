import { updateConnectedProfileCase } from "./cases/updateConnectedProfileCase";
import {
  IProfileAction,
  IProfileState,
  UPDATE_CONNECTED_PROFILE,
} from "./types";
import { defaultProfileState } from "./utils/defaultProfileState";

export function profile(
  state: IProfileState = defaultProfileState(),
  action: IProfileAction
): IProfileState {
  switch (action.type) {
    case UPDATE_CONNECTED_PROFILE:
      return updateConnectedProfileCase(state, action);
    default:
      return state;
  }
}
