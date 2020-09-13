import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Alert } from "@material-ui/lab";
import React from "react";
import { getConnectedProfile } from "../../api/methods";
import CredentialsSection from "../../register/components/CredentialsSection";
import IdentitySection from "../../register/components/IdentitySection";
import { validateEmailField } from "../../register/utils/validateEmailField";
import { validateNameField } from "../../register/utils/validateNameField";
import { validatePasswordField } from "../../register/utils/validatePasswordField";
import {
  defaultFormField,
  defaultPasswordField,
  IProfileFormFields,
} from "../../utils/types";
import { IProfile } from "../types";

export interface IProfileFormState {
  status: "ready" | "success" | "error";
  fields: IProfileFormFields;
  profile?: IProfile;
}

class MyProfile extends React.Component<{}, IProfileFormState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      status: "ready",
      fields: {
        email: defaultFormField(),
        firstname: defaultFormField(),
        lastname: defaultFormField(),
        password: defaultPasswordField(),
        confirmation: defaultFormField(),
      },
    };
  }

  componentDidMount() {
    //fetch connected profile
    getConnectedProfile().then((profile) => {
      this.setState({ profile });
      this.resetProfile();
    });
  }

  resetProfile = () => {
    if (this.state.profile) {
      this.changeField("email")(this.state.profile.email);
      this.changeField("firstname")(this.state.profile.firstname);
      this.changeField("lastname")(this.state.profile.lastname);
      this.changeField("password")("");
      this.changeField("confirmation")("");
    }
  };

  saveProfile = () => {
    console.log("Implementation du Patch");
  };

  changeField = (
    field: "email" | "firstname" | "lastname" | "password" | "confirmation"
  ): ((value: string) => void) => {
    return (value: string) => {
      const newState = {
        fields: {
          ...this.state.fields,
          [field]: { ...this.state.fields[field], value: value },
        },
      };

      // checking fiels conditions
      switch (field) {
        case "email":
          const { email } = newState.fields;
          validateEmailField(email);
          break;
        case "firstname":
          const { firstname } = newState.fields;
          validateNameField(firstname);
          break;
        case "lastname":
          const { lastname } = newState.fields;
          validateNameField(lastname);
          break;
        case "password":
        case "confirmation":
          const { password, confirmation } = newState.fields;
          validatePasswordField(password, confirmation, true);
          break;
      }
      this.setState(newState);
    };
  };

  render() {
    const { status, fields } = this.state;
    const { email, firstname, lastname, password, confirmation } = fields;
    return (
      <Container>
        <Box style={{ margin: "2rem 0" }}>
          {status !== "ready" ? (
            <Alert severity={status}>
              {status === "success"
                ? "Utilisateur connecté"
                : "Utilisateur inexistant"}
            </Alert>
          ) : null}
        </Box>
        <Box style={{ margin: "2rem 0" }}>
          <Grid container justify="flex-end">
            <Grid item xs={2}>
              <Button
                variant="contained"
                color="secondary"
                fullWidth={true}
                onClick={(_event) => console.log("Implementation du Logout")}
              >
                Logout
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                color="secondary"
                fullWidth={true}
                onClick={(_event) => console.log("Implementation du Delete")}
              >
                Delete account
              </Button>
            </Grid>
          </Grid>
        </Box>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.saveProfile();
          }}
        >
          <Box style={{ margin: "2rem 0" }}>
            <Grid container justify="space-evenly" alignItems="flex-start">
              <Grid item xs={4}>
                <IdentitySection
                  email={email}
                  firstname={firstname}
                  lastname={lastname}
                  changeEmail={this.changeField("email")}
                  changeFirstname={this.changeField("firstname")}
                  changeLastname={this.changeField("lastname")}
                />
              </Grid>
              <Grid item xs={4}>
                <CredentialsSection
                  password={password}
                  confirmation={confirmation}
                  changePassword={this.changeField("password")}
                  changeConfirmation={this.changeField("confirmation")}
                />
              </Grid>
            </Grid>
          </Box>
          <Box style={{ margin: "2rem 0" }}>
            <Grid container justify="space-between">
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  fullWidth={true}
                  onClick={(event) => console.log("Implementation du Reset")}
                >
                  Reset
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth={true}
                  type="submit"
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Container>
    );
  }
}

export default MyProfile;
