export interface IConversationMessage {
  _id: string;
  conversationId: string;
  createdAt: string;
  emitter: string;
  targets: string[];
  content: string;
}

export interface IConversation {
  _id: string;
  targets: string[];
  updatedAt: string;
  unseenMessages: number;
  messages: IConversationMessage[];
}
