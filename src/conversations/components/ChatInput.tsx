import { TextField, Fab } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import * as React from "react";

interface IChatInputState {
  message: string;
}

interface IChatInputProps {
  conversationId: string;
}

export default class ChatInput extends React.Component<
  IChatInputProps,
  IChatInputState
> {
  constructor(props: IChatInputProps) {
    super(props);
    this.state = {
      message: "",
    };
  }

  sendMessage = () => {
    console.log(
      `Le message ${this.state.message} va être envoyé à la conversation ${this.props.conversationId}`
    );
  };

  updateMessage = (newValue: string) => {
    this.setState({ message: newValue });
  };

  public render() {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          this.sendMessage();
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flexGrow: 1 }}>
            <TextField
              fullWidth={true}
              value={this.state.message}
              onChange={(event) => this.updateMessage(event.target.value)}
              variant="filled"
            />
          </div>
          <div
            style={{
              flexGrow: 0,
              display: "flex",
              width: "150px",
              justifyContent: "space-around",
            }}
          >
            <Fab type="submit" color="primary" aria-label="send">
              <Send fontSize="large" />
            </Fab>
          </div>
        </div>
      </form>
    );
  }
}
