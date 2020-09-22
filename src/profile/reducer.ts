import { updateConnectedProfileCase } from "./cases/updateConnectedProfileCase";
import { updateProfileListCase } from "./cases/updateProfileListCase";
import {
  IProfileAction,
  IProfileState,
  UPDATE_CONNECTED_PROFILE,
  UPDATE_PROFILE_LIST,
} from "./types";
import { defaultProfileState } from "./utils/defaultProfileState";

export function profile(
  state: IProfileState = defaultProfileState(),
  action: IProfileAction
): IProfileState {
  switch (action.type) {
    case UPDATE_CONNECTED_PROFILE:
      return updateConnectedProfileCase(state, action);
    case UPDATE_PROFILE_LIST:
      return updateProfileListCase(state, action);
    default:
      return state;
  }
}
