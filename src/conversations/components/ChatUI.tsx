import React, { Fragment } from "react";
import { match } from "react-router-dom";
import { getConversations } from "../../api/methods";
import { IConversation } from "../types";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";

interface ChatUIState {
  conversation?: IConversation;
}

interface ChatUIProps {
  match: match<{ conversationId: string }>;
}

class ChatUI extends React.Component<ChatUIProps, ChatUIState> {
  constructor(props: ChatUIProps) {
    super(props);
    this.state = {};
  }

  // temporaire pour avoir une conversation dans le state
  // TODO Ne pas faire plusieurs appel. Remonter l'appel dans la hierarchie de composants
  componentDidMount() {
    getConversations().then((conversations) => {
      const conversation = conversations.find(
        (conv) => conv._id === this.props.match.params.conversationId
      );
      this.setState({ conversation: conversation });
    });
  }

  render() {
    return (
      <Fragment>
        <h1>Chat</h1>
        {this.state.conversation ? (
          <Fragment>
            <ChatMessages messages={this.state.conversation.messages} />
            <ChatInput conversationId={this.state.conversation._id} />
          </Fragment>
        ) : (
          <h1>Impossible de trouver la conversation</h1>
        )}
      </Fragment>
    );
  }
}

export default ChatUI;
