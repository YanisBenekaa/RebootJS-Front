import { updateConversationListCase } from "./cases/updateConversationListCase";
import { updateConversationMessageCase } from "./cases/updateConversationMessageCase";
import {
  IConversationAction,
  IConversationState,
  UPDATE_CONVERSATION_LIST,
  UPDATE_CONVERSATION_MESSAGE,
} from "./types";
import { defaultConversationState } from "./utils/defaultConversationState";

export function conversation(
  state: IConversationState = defaultConversationState(),
  action: IConversationAction
): IConversationState {
  switch (action.type) {
    case UPDATE_CONVERSATION_LIST:
      return updateConversationListCase(state, action);
    case UPDATE_CONVERSATION_MESSAGE:
      return updateConversationMessageCase(state, action);
    default:
      return state;
  }
}
