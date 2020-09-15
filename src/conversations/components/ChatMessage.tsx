import * as React from "react";
import { IConversationMessage } from "../types";

export interface IChatMessageProps {
  message: IConversationMessage;
}

export default class ChatMessage extends React.Component<IChatMessageProps> {
  public render() {
    return <div>{this.props.message.content}</div>;
  }
}
