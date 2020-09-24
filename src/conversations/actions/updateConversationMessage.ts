import {
  IConversationMessage,
  UpdateConversationMessageAction,
  UPDATE_CONVERSATION_MESSAGE,
} from "../types";

export function updateConversationMessage(
  message: IConversationMessage
): UpdateConversationMessageAction {
  return {
    type: UPDATE_CONVERSATION_MESSAGE,
    message: message,
  };
}
