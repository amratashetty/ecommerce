import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Container, CssBaseline } from "@material-ui/core";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Contact from "./pages/Contact";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container style={{ backgroundColor: "#f2f2f2", height: "100vh" }}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </Container>
    </React.Fragment>
  );
}

export default App;
