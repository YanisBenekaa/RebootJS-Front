import React, { Fragment } from "react";
import { TextField } from "@material-ui/core";
import { IFormPasswordField, IFormField } from "../../utils/types";

interface CredentialsSectionProps {
  password: IFormPasswordField;
  confirmation: IFormField;
  changePassword: (value: string) => void;
  changeConfirmation: (value: string) => void;
}

class CredentialsSection extends React.Component<CredentialsSectionProps> {
  render() {
    const {
      password,
      confirmation,
      changePassword,
      changeConfirmation,
    } = this.props;
    return (
      <Fragment>
        <TextField
          type="password"
          label="Password"
          value={password.value}
          required={true}
          onChange={(event) => changePassword(event.target.value)}
          fullWidth={true}
          variant="outlined"
          {...(password.isValid
            ? {}
            : { error: true, helperText: "Ce champ est obligatoire" })}
        />
        <TextField
          type="password"
          label="Confirmation"
          required={true}
          value={confirmation.value}
          onChange={(event) => changeConfirmation(event.target.value)}
          fullWidth={true}
          variant="outlined"
          style={{ margin: "0.5rem 0" }}
          {...(confirmation.isValid
            ? {}
            : { error: true, helperText: "Ce champ est obligatoire" })}
        />
      </Fragment>
    );
  }
}

export default CredentialsSection;
