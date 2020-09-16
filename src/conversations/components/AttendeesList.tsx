import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import * as React from "react";
import { User } from "../../users/types";

interface IAttendeesListProps {
  attendees: User[];
}

export default class AttendeesList extends React.Component<
  IAttendeesListProps
> {
  public render() {
    return (
      <List>
        {this.props.attendees.map((attendee, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar>{attendee.firstname[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText>
              {attendee.firstname} {attendee.lastname}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    );
  }
}
