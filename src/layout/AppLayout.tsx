import { createStyles, Theme, withStyles } from "@material-ui/core";
import React, { Fragment } from "react";
import {
  getConnectedProfile,
  getConversations,
  getUsers,
} from "../api/methods";
import { IConversation } from "../conversations/types";
import { User } from "../users/types";
import AppContent from "./AppContent";
import AppDrawer, { drawerWidth } from "./AppDrawer";
import AppMenu from "./AppMenu";
import { IDrawerContent } from "./types";

interface AppLayoutProps {
  classes: any;
}

interface AppLayoutState {
  showDrawer: boolean;
  drawerContent?: IDrawerContent;
  users: User[];
  profile?: User;
  conversations: IConversation[];
  polling?: NodeJS.Timeout;
}

const styles = (theme: Theme) =>
  createStyles({
    content: {
      width: "100%",
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    contentShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawer: {
      width: drawerWidth,
    },
  });

class AppLayout extends React.Component<AppLayoutProps, AppLayoutState> {
  constructor(props: AppLayoutProps) {
    super(props);
    this.state = {
      showDrawer: false,
      users: [],
      conversations: [],
    };
  }

  changeDrawerContent = (content: IDrawerContent) => {
    this.setState({ showDrawer: true, drawerContent: content });
  };

  hideDrawer = () => {
    this.setState({ showDrawer: false });
  };

  fetchConversations = async (profile?: User) => {
    if (!profile) return;

    const conversations = await getConversations(profile);
    this.setState({ conversations });
  };

  async componentDidMount() {
    getUsers()
      .then((fetchedUsers) => {
        this.setState({ users: fetchedUsers });
      })
      .catch((error) => console.error(error));
    try {
      const profile = await getConnectedProfile();
      this.setState({ profile });
      await this.fetchConversations(profile);
    } catch (error) {
      console.error(error);
    }

    this.setState({
      polling: setInterval(() => {
        try {
          this.fetchConversations(this.state.profile);
        } catch (error) {
          console.error(error);
        }
      }, 3000),
    });
  }

  componentWillUnmount() {
    const { polling } = this.state;
    if (polling) clearInterval(polling);
  }

  render() {
    const { classes } = this.props;
    const filteredClasses = [
      classes.content,
      this.state.showDrawer && classes.contentShift,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <Fragment>
        <div className={filteredClasses}>
          <AppMenu changeDrawerContent={this.changeDrawerContent} />
          <AppContent
            conversations={this.state.conversations}
            connectedUser={this.state.profile}
            users={this.state.users}
          />
        </div>
        <AppDrawer
          conversations={this.state.conversations}
          connectedUser={this.state.profile}
          users={this.state.users}
          drawerContent={this.state.drawerContent}
          showDrawer={this.state.showDrawer}
          hideDrawer={this.hideDrawer}
        />
      </Fragment>
    );
  }
}

export default withStyles(styles)(AppLayout);
