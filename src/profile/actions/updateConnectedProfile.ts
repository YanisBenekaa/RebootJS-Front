import {
  IProfile,
  UpdateConnectedProfileAction,
  UPDATE_CONNECTED_PROFILE,
} from "../types";

// -- Définition de l'action --
export function updateConnectedProfile(
  profile: IProfile
): UpdateConnectedProfileAction {
  return {
    type: UPDATE_CONNECTED_PROFILE,
    profile: profile,
  };
}

//////////// Plus tard, dans mon composant
// dispatch(updateConnectedProfile(loggedUser))
