import { IProfileAction, IProfileState } from "../types";

export function updateConnectedProfileCase(
  state: IProfileState,
  action: IProfileAction
): IProfileState {
  return {
    ...state,
    connectedProfile: action.profile,
  };
}
