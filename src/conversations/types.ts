export interface IConversationMessage {
  _id: string;
  conversationId: string;
  createdAt: Date;
  emitter: string;
  targets: string[];
  content: string;
}

export interface IConversation {
  _id: string;
  targets: string[];
  updatedAt: Date;
  unseenMessages: number;
  messages: IConversationMessage[];
}
