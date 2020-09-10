import React from "react";
import { IFormField, defaultFormField } from "../../utils/types";
import { TextField, Button, Container, Box, Grid } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { login } from "../../api/methods";
import history from "../../history";
import { validateRequiredField } from "../../utils/validateRequiredField";

interface LoginFormState {
  email: IFormField;
  password: IFormField;
  status: "ready" | "success" | "error";
}

class LoginForm extends React.Component<{}, LoginFormState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      email: defaultFormField(),
      password: defaultFormField(),
      status: "ready",
    };
    this.submit = this.submit.bind(this); // ou définir submit en arrow function : submit = () => {}
  }

  submit() {
    login(this.state.email.value, this.state.password.value)
      .then((_profile) => {
        history.push("/");
        // this.setState({status: 'success'})
      })
      .catch((_error) => {
        this.setState({ status: "error" });
      });
  }

  render() {
    const { email, password, status } = this.state;
    return (
      <Container maxWidth="xs">
        {status !== "ready" ? (
          <Alert severity={status}>
            {status === "success"
              ? "Utilisateur connecté"
              : "Utilisateur inexistant"}
          </Alert>
        ) : null}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            this.submit();
          }}
        >
          <Box style={{ margin: "2rem 0" }}>
            <TextField
              label="Email"
              value={email.value}
              required={true}
              onChange={(event) =>
                this.setState({
                  email: {
                    value: event.target.value,
                    isValid: validateRequiredField(event.target.value),
                  },
                })
              }
              fullWidth={true}
              style={{ margin: "0.5rem 0" }}
              variant="outlined"
              {...(email.isValid
                ? {}
                : { error: true, helperText: "Ce champ est obligatoire" })}
            />
            <TextField
              type="password"
              label="Password"
              required={true}
              value={password.value}
              onChange={(event) =>
                this.setState({
                  password: {
                    value: event.target.value,
                    isValid: validateRequiredField(event.target.value),
                  },
                })
              }
              fullWidth={true}
              variant="outlined"
              {...(password.isValid
                ? {}
                : { error: true, helperText: "Ce champ est obligatoire" })}
            />
          </Box>
          <Box style={{ margin: "1rem 0" }}>
            <Grid container justify="flex-end">
              <Grid item xs={4}>
                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  fullWidth={true}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Container>
    );
  }
}

export default LoginForm;
