import * as React from "react";
import { IConversationMessage } from "../types";
import ChatMessage from "./ChatMessage";

export interface IChatMessagesProps {
  messages: IConversationMessage[];
}

export default class ChatMessages extends React.Component<IChatMessagesProps> {
  public render() {
    return this.props.messages.map((message, index) => (
      <ChatMessage key={index} message={message} />
    ));
  }
}
