import { IConversationState, UpdateConversationListAction } from "../types";

export function updateConversationListCase(
  state: IConversationState,
  action: UpdateConversationListAction
): IConversationState {
  return {
    ...state,
    list: action.conversations,
  };
}
