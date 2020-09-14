import {
  Box,
  createStyles,
  Drawer,
  IconButton,
  Theme,
  withStyles,
} from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";
import React from "react";
import ContactList from "../users/components/ContactList";
import { IDrawerContent } from "./types";

interface AppDrawerProps {
  showDrawer: boolean;
  drawerContent?: IDrawerContent;
  // drawerContent: IDrawerContent;
  // TODO Recuperer les bonnes infos pour chaque types de contenu;
  hideDrawer: () => void;
  classes: any;
}

const styles = (theme: Theme) =>
  createStyles({
    drawerHeader: {
      height: "50px",
      textAlign: "right",
      position: "sticky",
      top: 0,
      zIndex: 100,
      backgroundColor: theme.palette.background.paper,
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    paper: {
      width: drawerWidth,
    },
    drawerContent: {
      height: "calc(100% - 50px)",
    },
  });

class AppDrawer extends React.Component<AppDrawerProps> {
  render() {
    const content =
      this.props.drawerContent === "contacts" ? (
        <ContactList />
      ) : (
        <h1>To Be Implemented</h1>
      );
    return this.props.showDrawer ? (
      <Drawer
        variant="persistent"
        anchor="left"
        open={this.props.showDrawer}
        classes={{
          paper: this.props.classes.paper,
        }}
      >
        <Box className={this.props.classes.drawerHeader}>
          <IconButton aria-label="collapse" onClick={this.props.hideDrawer}>
            <ArrowBackIos />
          </IconButton>
        </Box>
        <Box className={this.props.classes.drawerContent}>{content}</Box>
      </Drawer>
    ) : null;
  }
}

export default withStyles(styles)(AppDrawer);
export const drawerWidth = 500;
