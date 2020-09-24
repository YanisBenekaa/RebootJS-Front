import { IConversationState, UpdateConversationMessageAction } from "../types";

export function updateConversationMessageCase(
  state: IConversationState,
  action: UpdateConversationMessageAction
): IConversationState {
  const message = action.message;
  const conversation = state.list.find(
    (conv) => conv._id === message.conversationId
  );
  if (conversation === undefined) {
    // Create conversation with new message inside
    return {
      ...state,
      list: [
        ...state.list,
        {
          _id: message.conversationId,
          targets: [...message.targets, message.emitter],
          unseenMessages: 1,
          updatedAt: message.createdAt,
          messages: [message],
        },
      ],
    };
  } else {
    // Update conversation with new message
    return {
      ...state,
      list: [
        ...state.list.filter((conv) => conv._id !== message.conversationId),
        {
          ...conversation,
          updatedAt: message.createdAt,
          messages: [...conversation.messages, message],
        },
      ],
    };
  }
}
