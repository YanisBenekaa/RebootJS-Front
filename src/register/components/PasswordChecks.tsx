import React from "react";
import { Grid } from "@material-ui/core";
import { IFormPasswordField } from "../../utils/types";
import PasswordCheck from "./PasswordCheck";

interface PasswordChecksProps {
  password: IFormPasswordField;
}

class PasswordChecks extends React.Component<PasswordChecksProps> {
  render() {
    const {
      hasLower,
      hasUpper,
      hasNumber,
      hasSymbol,
      hasValidLength,
    } = this.props.password;
    return (
      <Grid
        container
        direction="column"
        alignContent="flex-start"
        style={{ margin: "1rem 0" }}
      >
        <PasswordCheck
          check={hasLower}
          text="Le mot de passe contient une lettre minuscule"
        />
        <PasswordCheck
          check={hasUpper}
          text="Le mot de passe contient une lettre majuscule"
        />
        <PasswordCheck
          check={hasNumber}
          text="Le mot de passe contient un nombre"
        />
        <PasswordCheck
          check={hasSymbol}
          text="Le mot de passe contient un caractère spécial"
        />
        <PasswordCheck
          check={hasValidLength}
          text="Le mot de passe fait entre 8 et 30 caractères"
        />
      </Grid>
    );
  }
}

export default PasswordChecks;
