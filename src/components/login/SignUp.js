import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginContainer, Input, InputButton } from "../common/Components";

export default function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");

  function submit(e) {
    e.preventDefault();
    console.log(email, password, userName, confirmationPassword);
  }

  return (
    <LoginContainer>
      <form onSubmit={submit}>
        <h1>MyWallet</h1>
        <Input
          placeholder="Nome"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        ></Input>
        <Input
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <Input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Input
          placeholder="Confirme a Senha"
          type="password"
          value={confirmationPassword}
          onChange={(e) => setConfirmationPassword(e.target.value)}
        ></Input>
        <InputButton>Entrar</InputButton>
        <Link to="/">
          <h2>Já tem uma conta? Entre agora!</h2>
        </Link>
      </form>
    </LoginContainer>
  );
}
