import React, { Fragment } from "react";
import {
  RadioButtonCheckedOutlined,
  CheckBoxOutlineBlankOutlined,
} from "@material-ui/icons";

interface ProfileFormCheckProps {
  check: boolean;
}

class ProfileFormCheck extends React.Component<ProfileFormCheckProps> {
  render() {
    const text = "Le format de l'email doit être valide";
    return this.props.check ? (
      <Fragment>
        <RadioButtonCheckedOutlined />
        <span>{text}</span>
      </Fragment>
    ) : (
      <Fragment>
        <CheckBoxOutlineBlankOutlined />
        <span>{text}</span>
      </Fragment>
    );
  }
}

export default ProfileFormCheck;
