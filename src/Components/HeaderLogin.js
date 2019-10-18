import React, { useState } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import Input from "./Input";
import {Logo,seePost} from "./Icons";
import useInput from "../Hooks/useInput";

const HeaderWrapper = styled.span`
  float:right;
  padding-top:8px;
  vertical-align: middle;
`;
const HeaderCenter = styled.span`
  float:center;
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
  text-decoration:none;
  color:white;
  padding-right:10px;
`;

export default withRouter(() => {
  const [actionLogout, setActionLogout] = useState("logout");
  if(actionLogout==="logout_1"){
    localStorage.removeItem("token");
    window.location = "/";
  }


  return (
      <HeaderColumn>
        <Link to="/">
          <Logo />
        </Link>
        <HeaderWrapper>
            <HeaderLink to="/MyPost">MyPost</HeaderLink>
            <HeaderLink onClick={()=>setActionLogout("logout_1")} >로그아웃</HeaderLink> 
        </HeaderWrapper>
      </HeaderColumn>
  );
}); 