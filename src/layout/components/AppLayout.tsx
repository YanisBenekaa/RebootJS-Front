import { createStyles, Theme, withStyles } from "@material-ui/core";
import React, { Fragment } from "react";
import AppContent from "./AppContent";
import AppDrawer, { drawerWidth } from "./AppDrawer";
import AppMenu from "./AppMenu";
import { IAppState } from "../../appReducer";
import { connect } from "react-redux";
import { makeFetchUsers } from "../../profile/actions/makeFetchUsers";
import { makeFetchConversation } from "../../conversations/actions/makeFetchConversations";

interface AppLayoutProps {
  classes: any;
  showDrawer: boolean;
  makeFetchUser: () => void;
  makeFetchConversation: () => void;
}

interface AppLayoutState {
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
    this.state = {};
  }

  componentDidMount() {
    this.props.makeFetchUser();
    this.props.makeFetchConversation();

    this.setState({
      polling: setInterval(() => {
        this.props.makeFetchConversation();
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
          <AppContent />
        </div>
        <AppDrawer />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ layout }: IAppState) => ({
  showDrawer: layout.showDrawer,
});

const mapDispatchToProps = (dispatch: any) => ({
  makeFetchUser: () => dispatch(makeFetchUsers()),
  makeFetchConversation: () => dispatch(makeFetchConversation()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AppLayout));
