import { List } from "@material-ui/core";
import React from "react";
import { IConversation } from "../types";
import ConversationListItem from "./ConversationListItem";

interface ConversationListProps {
  conversations: IConversation[];
}

class ConversationList extends React.Component<ConversationListProps> {
  render() {
    return (
      <List>
        {this.props.conversations.map((conversation, index) => (
          <ConversationListItem conversation={conversation} key={index} />
        ))}
      </List>
    );
  }
}

export default ConversationList;
