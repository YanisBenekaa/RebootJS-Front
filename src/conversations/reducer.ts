import { updateConversationListCase } from "./cases/updateConversationListCase";
import {
  IConversationAction,
  IConversationState,
  UPDATE_CONVERSATION_LIST,
} from "./types";
import { defaultConversationState } from "./utils/defaultConversationState";

export function conversation(
  state: IConversationState = defaultConversationState(),
  action: IConversationAction
): IConversationState {
  switch (action.type) {
    case UPDATE_CONVERSATION_LIST:
      return updateConversationListCase(state, action);
    default:
      return state;
  }
}
