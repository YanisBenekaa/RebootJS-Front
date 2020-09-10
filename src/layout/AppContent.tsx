import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MyContacts from '../users/components/MyContacts';
import LoginScreen from '../login/components/LoginScreen';

class AppContent extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/login"><LoginScreen /></Route>
                <Route path="/" component={MyContacts}></Route>
            </Switch>
        )
    }
}

export default AppContent;