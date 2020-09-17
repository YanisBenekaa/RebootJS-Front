import React from "react";
import ContactListItem from "./ContactListItem";
import { User } from "../types";
import { List, ListItem, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import history from "../../history";

interface ContactListProps {
  users: User[];
  connectedUser?: User;
}

class ContactList extends React.Component<ContactListProps> {
  createConversation = (target: string) => {
    const { connectedUser } = this.props;
    if (connectedUser) {
      const conversationId = this.generateConversationId(
        connectedUser._id,
        target
      );
      return history.push(`/conversation/${conversationId}?target=${target}`);
    }
  };

  render() {
    return (
      <div>
        <h1>Liste de contact</h1>
        <List>
          {this.props.users.map((user, index) => (
            <ListItem
              button
              onClick={(_event) => {
                this.createConversation(user._id);
              }}
              key={index}
            >
              <ContactListItem
                firstname={user.firstname}
                lastname={user.lastname}
              />
            </ListItem>
          ))}
        </List>

        <Button color="primary">
          <Link to="/login">Se Connecter</Link>
        </Button>
      </div>
    );
  }

  generateConversationId = (userId: string, target: string): string => {
    return Buffer.from(
      [userId, target, new Date().toISOString()].join("_")
    ).toString("base64");
  };
}

export default ContactList;
