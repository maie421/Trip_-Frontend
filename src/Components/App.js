
import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Routes from "./Routes";
import Header from "./Header";
import { HashRouter as Router } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default () => (
  <ThemeProvider theme={Theme}>
    <Router>
      <GlobalStyles />
        <Header />
        <Routes/>
    </Router>
    <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
  </ThemeProvider>
); 