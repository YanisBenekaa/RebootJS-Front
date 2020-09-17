import React from "react";
import { Switch, Route } from "react-router-dom";
import ChatUI from "../conversations/components/ChatUI";
import { IConversation } from "../conversations/types";
import LoginScreen from "../login/components/LoginScreen";
import MyProfile from "../profile/components/MyProfile";
import { User } from "../users/types";
import { HomeScreen } from "./HomeScreen";

interface AppContentProps {
  users: User[];
  connectedUser?: User;
  conversations: IConversation[];
}

class AppContent extends React.Component<AppContentProps> {
  render() {
    return (
      <Switch>
        <Route
          path="/conversation/:conversationId"
          component={() => (
            <ChatUI
              conversations={this.props.conversations}
              users={this.props.users}
            />
          )}
        />
        <Route
          path="/profile"
          component={() => (
            <MyProfile connectedUser={this.props.connectedUser} />
          )}
        />
        <Route path="/login" component={LoginScreen} />
        <Route path="/" component={HomeScreen} />
      </Switch>
    );
  }
}

export default AppContent;
