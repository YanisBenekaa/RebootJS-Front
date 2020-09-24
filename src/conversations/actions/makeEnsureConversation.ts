import { IAppState } from "../../appReducer";
import { updateConversationList } from "./updateConversationList";

export function makeEnsureConversation(conversationId: string, target: string) {
  return (dispatch: any, getState: () => IAppState) => {
    const conversations = getState().conversation.list;
    const conversation = conversations.find(
      (conv) => conv._id === conversationId
    );
    if (!conversation) {
      const newConv = {
        _id: conversationId,
        messages: [],
        unseenMessages: 0,
        updatedAt: new Date(),
        targets: [target],
      };
      dispatch(updateConversationList([...conversations, newConv]));
    }
  };
}
