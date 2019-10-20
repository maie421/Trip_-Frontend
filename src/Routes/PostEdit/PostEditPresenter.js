import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const Wrapper = styled.div`
  min-height: 80vh;y
  vertical-align: middle;
  display: flex;
  margin:0 auto;
  width: 100%;
  max-width: 380px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Box = styled.div`
  ${props => props.theme.whiteBox}
  border-radius:0px;
  width: 100%;
  max-width: 350px;
`;

const StateChanger = styled(Box)`
  text-align: center;
  padding: 20px 0px;
`;

const Link = styled.span`
  color: ${props => props.theme.blueColor};
  cursor: pointer;
`;

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  form {
    width: 100%;
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 7px;
      }
    }
    button {
      margin-top: 10px;
    }
  }
`;


export default ({
    onChangeHandler,
    onSubmit,
    location,
    captionInput
}) => (
    <Wrapper>
    <form onSubmit={onSubmit}>
     <Input placeholder={"location"} {...location} />
     <Input placeholder={"captionInput"} {...captionInput} />
     <input type="file" name="file" onChange={onChangeHandler}/>
     <Button text={"button"} />
     </form>
  </Wrapper>
);