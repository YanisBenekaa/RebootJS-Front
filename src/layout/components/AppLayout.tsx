import { createStyles, Theme, withStyles } from "@material-ui/core";
import React, { Fragment } from "react";
import {
  getConnectedProfile,
  getConversations,
  getUsers,
} from "../../api/methods";
import { IConversation } from "../../conversations/types";
import { User } from "../../users/types";
import AppContent from "./AppContent";
import AppDrawer, { drawerWidth } from "./AppDrawer";
import AppMenu from "./AppMenu";
import { IAppState } from "../../appReducer";
import { connect } from "react-redux";

interface AppLayoutProps {
  classes: any;
  showDrawer: boolean;
}

interface AppLayoutState {
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
      users: [],
      conversations: [],
    };
  }

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
    const { classes, showDrawer } = this.props;
    const filteredClasses = [
      classes.content,
      showDrawer && classes.contentShift,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <Fragment>
        <div className={filteredClasses}>
          <AppMenu />
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
        />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ layout }: IAppState) => ({
  showDrawer: layout.showDrawer,
});
export default connect(mapStateToProps)(withStyles(styles)(AppLayout));
