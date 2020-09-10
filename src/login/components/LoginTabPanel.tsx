import React from "react";

interface LoginTabPanelProps {
  index: number;
  valueTab: number;
  children: React.ReactNode;
}

class LoginTabPanel extends React.Component<LoginTabPanelProps> {
  render() {
    const hidden = this.props.valueTab !== this.props.index;
    return <div hidden={hidden}>{this.props.children}</div>;
  }
}

export default LoginTabPanel;
