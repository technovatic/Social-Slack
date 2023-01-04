import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "./firebase";

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2584/2584687.png"
          alt=""
        />
        <h1>Sign in to Haruna Slack Build</h1>
        <p>haruna.slack.com</p>

        <Button onClick={signIn}>Sign In with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
  background-color: #f8f8f8;
`;
const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }
  > Button {
    margin-top: 40px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`;
