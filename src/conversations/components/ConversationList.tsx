import { List } from "@material-ui/core";
import React from "react";
import { User } from "../../users/types";
import { IConversation } from "../types";
import ConversationListItem from "./ConversationListItem";

interface ConversationListProps {
  users: User[];
  conversations: IConversation[];
}

class ConversationList extends React.Component<ConversationListProps> {
  render() {
    return (
      <List>
        {this.props.conversations.map((conversation, index) => (
          <ConversationListItem
            users={this.props.users}
            conversation={conversation}
            key={index}
          />
        ))}
      </List>
    );
  }
}

export default ConversationList;
