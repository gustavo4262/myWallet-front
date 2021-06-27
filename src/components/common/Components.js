import styled from "styled-components";

export const Button = styled.button`
  background-color: #a328d6;
  color: white;
  width: 86vw;
  height: 46px;
  border-radius: 5px;
  border: none;
  font-size: 20px;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  margin-bottom: 36px;
`;

export const Input = styled.input`
  width: 85vw;
  height: 58px;
  background-color: #ffffff;
  border-radius: 5px;
  margin-bottom: 13px;
  padding-left: 15px;
  font-size: 20px;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  color: black;
  outline: none;
`;

export const LoginContainer = styled.div`
  background-color: #9056bf;
  height: 100vh;
  padding-top: 170px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  color: white;
  h1 {
    font-size: 32px;
    font-family: "Saira Stencil One", cursive;
    margin-bottom: 24px;
  }
  a {
    font-size: 15px;
    font-family: "Raleway", sans-serif;
    font-weight: 700;
  }
`;
