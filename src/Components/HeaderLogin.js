import React, { useState } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import {Logo} from "./Icons";
import {useQuery} from "react-apollo-hooks";
import {ME_NAME} from "./MeQuery";

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

const HeaderLink = styled(Link)`
  text-decoration:none;
  color:white;
  padding-right:10px;
`;

export default withRouter(() => {
  // const {data} = useQuery(ME_NAME);
  // let name=""
  const [actionLogout, setActionLogout] = useState("logout");
  if(actionLogout==="logout_1"){
    localStorage.removeItem("token");
    window.location = "/";
  }
  // if(data!==undefined){
  //   name=data.me.name;
  // }
  return (
      <HeaderColumn>
        <Link to="/">
          <Logo />
        </Link>
        <HeaderWrapper>
            <HeaderLink to="/PostEdit">글쓰기</HeaderLink>
            {/* <HeaderLink to={name}>My profile</HeaderLink> */}
            <HeaderLink onClick={()=>setActionLogout("logout_1")} >로그아웃</HeaderLink> 
        </HeaderWrapper>
      </HeaderColumn>
  );
}); 