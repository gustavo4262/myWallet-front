import styled from "styled-components";
import { Button, Input } from "../common/Components";

export default function SignIn() {
  return (
    <Container>
      <h1>MyWallet</h1>
      <Input placeholder="E-mail"></Input>
      <Input placeholder="Senha"></Input>
      <Button>Entrar</Button>
      <h2>Primeira vez? Cadastre-se!</h2>
    </Container>
  );
}

const Container = styled.div`
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
  h2 {
    font-size: 15px;
    font-family: "Raleway", sans-serif;
    font-weight: 700;
  }
`;
