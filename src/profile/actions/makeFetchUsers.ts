import { getUsers } from "../../api/methods";
import { IAppState } from "../../appReducer";
import { updateProfileList } from "./updateProfileList";

export function makeFetchUsers() {
  return (dispatch: any, _getState: () => IAppState) => {
    // fetch à l'API
    getUsers().then((fetchedUsers) => {
      dispatch(updateProfileList(fetchedUsers));
    });
    //   .catch(error => console.error(error));
    // si besoin du store : const store = getState();

    // dispatch action redux
    // dispatch(updateUsersList())
    // dispatch(retrieveNewUsers)
  };
}
