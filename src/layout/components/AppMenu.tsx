import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Forum from "@material-ui/icons/Forum";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, { Fragment } from "react";
import { ProfileButton } from "./ProfileButton";
import { IDrawerContent } from "../types";
import { AccountCircle, Contacts, ForumSharp } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { IAppState } from "../../appReducer";
import { connect } from "react-redux";
import { IProfile } from "../../profile/types";
import { changeDrawerContent } from "../actions/changeDrawerContentAction";
import { Link } from "react-router-dom";

interface AppMenuProps {
  changeDrawerContent: (content: IDrawerContent) => void;
  profile?: IProfile;
}

export function AppMenu({ changeDrawerContent, profile }: AppMenuProps) {
  const disconnectNavbar = (
    <Toolbar>
      <Link to="/login">
        <IconButton color="default" aria-label="profile">
          {" "}
          <AccountCircle fontSize="large" />{" "}
        </IconButton>{" "}
      </Link>
    </Toolbar>
  );

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
          {profile ? (
            <Grid item>
              <Toolbar>
                <h1>
                  {profile.firstname} {profile.lastname}
                </h1>
              </Toolbar>
            </Grid>
          ) : null}
          <Grid item>
            {profile ? (
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
            ) : (
              disconnectNavbar
            )}
          </Grid>
        </Grid>
      </AppBar>
    </Fragment>
  );
}

const mapStateToProps = ({ profile }: IAppState) => ({
  profile: profile.connectedProfile,
});

const mapDispatchToProps = (dispatch: any) => ({
  changeDrawerContent: (content: IDrawerContent) =>
    dispatch(changeDrawerContent(content)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppMenu);
