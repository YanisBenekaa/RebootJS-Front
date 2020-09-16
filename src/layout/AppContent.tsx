import React from "react";
import { Switch, Route } from "react-router-dom";
import ChatUI from "../conversations/components/ChatUI";
import LoginScreen from "../login/components/LoginScreen";
import MyProfile from "../profile/components/MyProfile";
import { User } from "../users/types";
import { HomeScreen } from "./HomeScreen";

interface AppContentProps {
  users: User[];
}

class AppContent extends React.Component<AppContentProps> {
  render() {
    return (
      <Switch>
        <Route
          path="/conversation/:conversationId"
          component={() => <ChatUI users={this.props.users} />}
        />
        <Route path="/profile" component={MyProfile} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/" component={HomeScreen} />
      </Switch>
    );
  }
}

export default AppContent;
