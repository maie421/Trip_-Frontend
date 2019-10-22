import React ,{ useState }from "react";
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
  action,
  name,
  age,
  email,
  setAction,
  onSubmit,
  password
}) => (
  <Wrapper>
    <Form>
    <>
      <Helmet>
        <title>로그인</title>
      </Helmet>
      <form onSubmit={onSubmit}>
        <Input placeholder={"Email"} {...email} type="email" />
        <Button text={"Log in"} />
      </form>
    </>
      {action === "signUp" && (
        <>
        <Helmet>
          <title>회원가입</title>
        </Helmet>
        <form onSubmit={onSubmit}>
          <Input placeholder={"Email"} {...email} type="email" />
          <Input placeholder={"name"} {...name} />
          <Input placeholder={"age"} {...age} />
          <Button text={"Sign up"} />
        </form>
      </>
      )}
      {action === "confirm" && (
        <>
        <Helmet>
          <title>비밀번호</title>
        </Helmet>
        <form onSubmit={onSubmit}>
          <Input placeholder="Paste your secret" required {...password} />
          <Button text={"Confirm"} />
        </form>
      </>
      )}
    </Form>
    {action !=="confirm"&&(
    <StateChanger>
      {action === "logIn" ? (
        <>
          Don't have an account?{" "}
          <Link onClick={() => setAction("signUp")}>Sign up</Link>
        </>
      ) : (
        <>
          Have an account?{" "}
          <Link onClick={() => setAction("logIn")}>Log in</Link>
        </>
      )}
    </StateChanger>
    )}
  </Wrapper>
);