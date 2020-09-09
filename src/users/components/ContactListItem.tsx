import React from 'react';
import { ListItemText } from '@material-ui/core';

interface ContactListItemProps {
    firstname: string;
    lastname: string;
}

class ContactListItem extends React.Component<ContactListItemProps>{
    render() {
        return <ListItemText>Name: {this.props.firstname} {this.props.lastname}</ListItemText>
    }
}

export default ContactListItem;