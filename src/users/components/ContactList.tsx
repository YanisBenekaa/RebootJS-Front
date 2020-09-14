import React from "react";
import ContactListItem from "./ContactListItem";
import { User } from "../types";
import { getUsers } from "../../api/methods";
import { List, ListItem, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

interface ContactListState {
  users: User[];
}

class ContactList extends React.Component<{}, ContactListState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    getUsers().then((fetchedUsers) => {
      this.setState({ users: fetchedUsers });
    });
  }

  render() {
    return (
      <div>
        <h1>Liste de contact</h1>
        <List>
          {this.state.users.map((user, index) => (
            <ListItem key={index}>
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
}

export default ContactList;
