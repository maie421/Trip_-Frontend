
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Routes from "./Routes";
import Header from "./Header";
import HeaderLogin from "./HeaderLogin";
import { HashRouter as Router } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
`;


export default () => {
  const {
    data: { isLoggedIn }
  } = useQuery(QUERY);

  return (
  <ThemeProvider theme={Theme}>
    <Router>
      <GlobalStyles />
        {isLoggedIn?<HeaderLogin />:<Header />}
        <Wrapper>
        <Routes isLoggedIn={isLoggedIn} />
        </Wrapper>
    </Router>
    <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
  </ThemeProvider>
  );
}; 