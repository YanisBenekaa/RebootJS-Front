import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { User } from "../../users/types";
import { IConversation } from "../types";

interface ConversationListItemProps {
  conversation: IConversation;
  users: User[];
}

class ConversationListItem extends React.Component<ConversationListItemProps> {
  render() {
    return (
      <Fragment>
        <Link to={`/conversation/${this.props.conversation._id}`}>
          <ListItem>
            <ListItemAvatar>
              <AvatarGroup max={3}>
                {this.props.conversation.targets.map((target, index) => (
                  <Avatar key={index}>
                    {this.getUserFormList(target)?.firstname[0] ||
                      "Unknown User"[0]}
                  </Avatar>
                ))}
              </AvatarGroup>
            </ListItemAvatar>
            <ListItemText
              primary={this.props.conversation.messages[0].content}
              secondary={this.props.conversation.updatedAt.toLocaleString()}
            ></ListItemText>
          </ListItem>
        </Link>
        <Divider />
      </Fragment>
    );
  }

  getUserFormList = (id: string) =>
    this.props.users.find((user) => user._id === id);
}

export default ConversationListItem;
