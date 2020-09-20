import * as React from "react";
import { IConversationMessage } from "../types";
import ChatMessage from "./ChatMessage";

export interface IChatMessagesProps {
  messages: IConversationMessage[];
  conversationSeen: () => void;
}

export default class ChatMessages extends React.Component<IChatMessagesProps> {
  componentDidUpdate(prevProps: IChatMessagesProps) {
    const { messages } = this.props;
    const { messages: prevMessages } = prevProps;

    // reception ou envoi d'un nouveau message
    if (messages !== prevMessages) {
      this.props.conversationSeen();
    }
  }

  componentDidMount() {
    // création initiale du composant => ouverture de la premiere conversation
    this.props.conversationSeen();
  }

  render() {
    return this.props.messages.map((message, index) => (
      <ChatMessage key={index} message={message} />
    ));
  }
}
