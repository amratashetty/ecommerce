import { Container, CssBaseline } from "@material-ui/core";
import React from "react";

function Settings() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container style={{ backgroundColor: "#f2f2f2", height: "100vh" }}>
        <h1>Settings</h1>
      </Container>
    </React.Fragment>
  );
}

export default Settings;
