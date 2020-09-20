import React from "react";
import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Router } from "react-router-dom";
import history from "./history";
import AppLayout from "./layout/components/AppLayout";
import { Provider } from "react-redux";
import { store } from "./store";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFC23C",
      contrastText: "white",
    },
    secondary: {
      main: "#FF5760",
      contrastText: "white",
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <AppLayout />
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
