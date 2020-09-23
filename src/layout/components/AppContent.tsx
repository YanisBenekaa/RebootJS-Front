import React from "react";
import { Switch, Route } from "react-router-dom";
import ChatUI from "../../conversations/components/ChatUI";
import LoginScreen from "../../login/components/LoginScreen";
import MyProfile from "../../profile/components/MyProfile";
import { HomeScreen } from "./HomeScreen";

class AppContent extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/conversation/:conversationId" component={ChatUI} />
        <Route path="/profile" component={MyProfile} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/" component={HomeScreen} />
      </Switch>
    );
  }
}

export default AppContent;
