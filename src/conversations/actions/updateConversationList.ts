import {
  IConversation,
  UpdateConversationListAction,
  UPDATE_CONVERSATION_LIST,
} from "../types";

export function updateConversationList(
  conversations: IConversation[]
): UpdateConversationListAction {
  return {
    type: UPDATE_CONVERSATION_LIST,
    conversations: conversations,
  };
}
