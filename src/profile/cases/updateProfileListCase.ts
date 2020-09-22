import { IProfileState, UpdateProfileListAction } from "../types";

export function updateProfileListCase(
  state: IProfileState,
  action: UpdateProfileListAction
): IProfileState {
  return {
    ...state,
    list: action.profiles,
  };
}
