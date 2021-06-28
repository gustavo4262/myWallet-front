import axios from "axios";
import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { LoginContainer, InputButton, Input } from "../common/Components";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  function submit(e) {
    e.preventDefault();

    const data = { email, password };

    const request = axios.post("http://127.0.0.1:4000/sign-in", data);

    request.then((response) => {
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      history.push("/");
    });
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
        <InputButton>Entrar</InputButton>
        <Link to="/sign-up">
          <h2>Primeira vez? Cadastre-se!</h2>
        </Link>
      </form>
    </LoginContainer>
  );
}
