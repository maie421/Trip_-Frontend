import React, { useState } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import Input from "./Input";
import {Logo} from "./Icons";
import useInput from "../Hooks/useInput";

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
  text-decoration:none;
  color:white;
`;

export default withRouter(({ history }) => {
  const [actionLogout, setActionLogout] = useState("logout");
  const search = useInput("");
  if(actionLogout==="logout_1"){
    localStorage.removeItem("token");
    window.location = "/";
  }

  const onSearchSubmit = e => {
    e.preventDefault();
    console.log(`엔터${search.value}`)
    history.push(`/search?term=${search.value}`);
  };

  return (
      <HeaderColumn>
        <Link to="/">
          <Logo />
        </Link>
        <HeaderWrapper>
        <form onSubmit={onSearchSubmit}>
          <SearchInput
            value={search.value}
            onChange={search.onChange}
            placeholder="Search"
          />
            <HeaderLink onClick={()=>setActionLogout("logout_1")} >로그아웃</HeaderLink> 
        </form>
        </HeaderWrapper>
      </HeaderColumn>
  );
}); 