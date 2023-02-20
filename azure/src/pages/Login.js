import React, { useState } from "react";
import { TextField, Button, Box, Card } from "@material-ui/core/";
import { useNavigate } from "react-router-dom";
import { CardActions, CardContent, Grid } from "@mui/material";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      navigate("/home");
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
    <React.Fragment>
      <Box
        sm={{
          width: 300,
          height: 300,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Grid container direction="row" justifyContent="center" alignItems="center" style={{ height: "100vh" }}>
          <Card variant="outlined" style={{ padding: 16, minWidth: 300 }}>
            <CardContent>
              <form>
                <Grid container direction="column">
                  <TextField label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                  <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Grid>
              </form>
            </CardContent>
            <CardActions>
              <Button style={{ marginLeft: 12 }} variant="contained" color="primary" onClick={handleLogin}>
                Login
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default Login;
