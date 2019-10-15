
import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Routes from "./Routes";
import Header from "./Header";
import { HashRouter as Router } from "react-router-dom";

export default () => (
  <ThemeProvider theme={Theme}>
    <Router>
      <GlobalStyles />
        <Header />
        <Routes/>
    </Router>
  </ThemeProvider>
); 