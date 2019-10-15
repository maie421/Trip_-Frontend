import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from "../Routes/Login";
import Input from "./Input";
import useInput from "../Hooks/useInput";
import { Compass, HeartEmpty, User ,Logo} from "./Icons";

const HeaderWrapper = styled.span`
  float:right;
  padding-top:8px;
  vertical-align: middle;
`;

const HeaderColumn = styled.div`
  background-color:#282B2E;
  height:33px;
  width: 100%;
  margin-bottom:10px;
`;

const SearchInput = styled(Input)`
  background-color: ${props => props.theme.bgColor};
  margin-right:10px;
  font-size: 14px;
  border-radius: 3px;
  height: auto;
  text-align: center;
`;

const HeaderLink = styled(Link)`
  padding:0 8px;
  text-decoration:none;
  color:white;
`;

export default () => {
  return (
      <HeaderColumn>
        <Link to="/">
          <Logo />
        </Link>
        <HeaderWrapper>
            {/* <SearchInput
              placeholder="Search"
            /> */}
          <HeaderLink to="/Login">로그인</HeaderLink>
        </HeaderWrapper>
      </HeaderColumn>
  );
}; 