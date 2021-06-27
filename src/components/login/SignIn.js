import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginContainer, Button, Input } from "../common/Components";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submit(e) {
    e.preventDefault();
    console.log(email, password);
  }
  return (
    <LoginContainer>
      <form onSubmit={submit}>
        <h1>MyWallet</h1>
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
        <Button>Entrar</Button>
        <Link to="/sign-up">
          <h2>Primeira vez? Cadastre-se!</h2>
        </Link>
      </form>
    </LoginContainer>
  );
}
