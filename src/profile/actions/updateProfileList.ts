import {
  IProfile,
  UpdateProfileListAction,
  UPDATE_PROFILE_LIST,
} from "../types";

export function updateProfileList(
  profiles: IProfile[]
): UpdateProfileListAction {
  return {
    type: UPDATE_PROFILE_LIST,
    profiles: profiles,
  };
}
