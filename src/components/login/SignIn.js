import { Link } from "react-router-dom";
import styled from "styled-components";
import { LoginContainer, Button, Input } from "../common/Components";

export default function SignIn() {
  return (
    <LoginContainer>
      <h1>MyWallet</h1>
      <Input placeholder="E-mail"></Input>
      <Input placeholder="Senha"></Input>
      <Button>Entrar</Button>
      <Link to="/sign-up">
        <h2>Primeira vez? Cadastre-se!</h2>
      </Link>
    </LoginContainer>
  );
}