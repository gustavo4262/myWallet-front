import { Link } from "react-router-dom";
import styled from "styled-components";
import { LoginContainer, Input, Button } from "../common/Components";

export default function SignUp() {
  return (
    <LoginContainer>
      <h1>MyWallet</h1>
      <Input placeholder="Nome"></Input>
      <Input placeholder="E-mail"></Input>
      <Input placeholder="Senha"></Input>
      <Input placeholder="Confirme a Senha"></Input>
      <Button>Entrar</Button>
      <Link to="/">
        <h2>Primeira vez? Cadastre-se!</h2>
      </Link>
    </LoginContainer>
  );
}
