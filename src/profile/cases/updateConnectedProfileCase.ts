import { IProfileState, UpdateConnectedProfileAction } from "../types";

export function updateConnectedProfileCase(
  state: IProfileState,
  action: UpdateConnectedProfileAction
): IProfileState {
  return {
    ...state,
    connectedProfile: action.profile,
  };
}
