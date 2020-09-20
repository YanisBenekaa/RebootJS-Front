import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Forum from "@material-ui/icons/Forum";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, { Fragment } from "react";
import { ProfileButton } from "../ProfileButton";
import { IDrawerContent } from "../types";
import { Contacts, ForumSharp } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

interface AppMenuProps {
  changeDrawerContent: (content: IDrawerContent) => void;
}

export function AppMenu({ changeDrawerContent }: AppMenuProps) {
  return (
    <Fragment>
      <AppBar position="static" style={{ height: "10vh" }}>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          style={{ height: "100%" }}
        >
          <Grid item>
            <Toolbar>
              <Forum fontSize="large" />
              <Typography variant="h3">flint.</Typography>
            </Toolbar>
          </Grid>
          <Grid item>
            <Toolbar>
              <h1>Nom de l'utilisateur</h1>
            </Toolbar>
          </Grid>
          <Grid item>
            <Toolbar>
              <IconButton
                color="default"
                onClick={() => changeDrawerContent("conversations")}
              >
                <ForumSharp fontSize="large" />
              </IconButton>
              <IconButton
                color="default"
                onClick={() => changeDrawerContent("contacts")}
              >
                <Contacts fontSize="large" />
              </IconButton>
              <ProfileButton />
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
    </Fragment>
  );
}

export default AppMenu;
