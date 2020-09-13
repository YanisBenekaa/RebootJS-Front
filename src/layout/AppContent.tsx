import React from "react";
import { Switch, Route } from "react-router-dom";
import MyContacts from "../users/components/MyContacts";
import LoginScreen from "../login/components/LoginScreen";
import MyProfile from "../profile/components/MyProfile";

class AppContent extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/profile" component={MyProfile} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/" component={MyContacts} />
      </Switch>
    );
  }
}

export default AppContent;
