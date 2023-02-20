import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Dashboard from "./Dashboard";
import Products from "./Products";
import Analytics from "./Analytics";
import Settings from "./Settings";
import Contact from "./Contact";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const Home = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div className={classes.list} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        <ListItem button element={<Dashboard />}>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button element={<Products />}>
          <ListItemText primary="Products" />
        </ListItem>
        <ListItem button element={<Analytics />}>
          <ListItemText primary="Analytics" />
        </ListItem>
        <ListItem button element={<Settings />}>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button element={<Contact />}>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={toggleDrawer("left", true)} className={classes.menuButton}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                Azure E-comm Dash
              </Typography>
            </Toolbar>
          </AppBar>

          <button onClick={toggleDrawer(anchor, true)}>Open {anchor}</button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      <h1>Welcome to my home page</h1>
      <p>This is some sample text for the home page</p>
    </div>
  );
};

export default Home;
