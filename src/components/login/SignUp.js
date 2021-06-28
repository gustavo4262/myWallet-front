import axios from "axios";
import { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { LoginContainer, Input, InputButton } from "../common/Components";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const history = useHistory();

  function submit(e) {
    e.preventDefault();
    if (password !== confirmationPassword) {
      return alert("Senha e Confirmação de Senha não coincidem");
    }
    const data = { username, email, password };
    const request = axios.post("http://127.0.0.1:4000/sign-up", data);
    request.then((response) => {
      console.log(data);
      alert("Cadastro feito com sucesso!");
      history.push("/sign-in");
    });
    request.catch((err) => {
      if (err.status === 409) alert("Usuário já cadastrado");
      if (err.status === 400) alert("Erro no cadastro");
      clear();
    });
  }

  function clear() {
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmationPassword("");
  }

  return (
    <LoginContainer>
      <form onSubmit={submit}>
        <h1>MyWallet</h1>
        <Input
          placeholder="Nome"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
