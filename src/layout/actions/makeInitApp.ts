import { getConnectedProfile } from "../../api/methods";
import { IAppState } from "../../appReducer";
import { makeFetchConversation } from "../../conversations/actions/makeFetchConversations";
import { makeFetchUsers } from "../../profile/actions/makeFetchUsers";
import { updateConnectedProfile } from "../../profile/actions/updateConnectedProfile";
import { makeStartSocket } from "../../socket/actions/makeStartSocket";

export function makeInitApp() {
  return async (dispatch: any, getState: () => IAppState) => {
    // pas de user stocké
    if (getState().profile.connectedProfile === undefined) {
      // regarder s'il y a un user connecté
      try {
        const profile = await getConnectedProfile();
        dispatch(updateConnectedProfile(profile));
      } catch (err) {
        console.log("No user connected, please log in");
      }
    }

    // Si j'avais un user avant l'action ou si je viens d'update l'user connecté
    if (getState().profile.connectedProfile) {
      dispatch(makeFetchUsers());
      dispatch(makeFetchConversation());
      dispatch(makeStartSocket());
    }
  };
}
