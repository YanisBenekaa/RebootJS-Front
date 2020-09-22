import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import * as React from "react";
import { connect } from "react-redux";
import { IAppState } from "../../appReducer";
import { IProfile } from "../../profile/types";

interface IAttendeesListProps {
  attendees: IProfile[];
  targets?: string[];
}

class AttendeesList extends React.Component<IAttendeesListProps> {
  render() {
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

const mapStateToProps = (
  { profile }: IAppState,
  { targets }: { targets?: string[] }
) => ({
  attendees: profile.list.filter((user) => targets?.includes(user._id)),
});

export default connect(mapStateToProps)(AttendeesList);
