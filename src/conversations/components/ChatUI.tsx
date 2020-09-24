import React from "react";
import { match, withRouter } from "react-router-dom";
import { patchConversationSeen, sendMessage } from "../../api/methods";
import { IConversation, IConversationMessage } from "../types";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
import AttendeesList from "./AttendeesList";
import { IAppState } from "../../appReducer";
import { connect } from "react-redux";
import { updateConversationMessage } from "../actions/updateConversationMessage";

interface ChatUIProps {
  match: match<{ conversationId: string }>;
  location: any;
  history: any;
  conversation?: IConversation;
  updateConversationMessage: (message: IConversationMessage) => void;
}

class ChatUI extends React.Component<ChatUIProps> {
  conversationSeen = () => {
    if (this.props.conversation) {
      patchConversationSeen(this.props.conversation._id);
    }
  };

  doSendMessage = async (message: string) => {
    const { conversation } = this.props;
    if (conversation) {
      const sentMessage = await sendMessage(
        conversation._id,
        conversation.targets,
        message
      );
      this.props.updateConversationMessage(sentMessage);
    }
  };

  render() {
    if (!this.props.conversation) {
      return <h1>Impossible de trouver la conversation</h1>;
    } else {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "calc(100% - 2rem)",
            padding: "1rem",
            boxSizing: "border-box",
            justifyContent: "strech",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              padding: "1rem",
              boxSizing: "border-box",
              flexGrow: 1,
            }}
          >
            <div style={{ flexGrow: 1, overflow: "auto" }}>
              <ChatMessages
                conversationSeen={this.conversationSeen}
                messages={this.props.conversation.messages}
              />
            </div>
            <div style={{ flexGrow: 0, height: "60px" }}>
              <ChatInput
                doSendMessage={this.doSendMessage}
                conversationId={this.props.match.params.conversationId}
              />
            </div>
            <div style={{ height: "100%", flexGrow: 0, width: "15%" }}>
              <AttendeesList targets={this.props.conversation?.targets} />
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (
  { conversation }: IAppState,
  { match }: ChatUIProps
) => ({
  conversation: conversation.list.find(
    (conversation) => conversation._id === match.params.conversationId
  ),
});
const mapDispatchToProps = (dispatch: any) => ({
  updateConversationMessage: (message: IConversationMessage) =>
    dispatch(updateConversationMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ChatUI));
