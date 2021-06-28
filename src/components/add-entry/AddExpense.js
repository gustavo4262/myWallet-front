import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import { EntryContainer, Input, InputButton } from "../common/Components";

export default function AddExpense() {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const history = useHistory();
  function submit(e) {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: user.token,
      },
    };
    const data = { value, description };

    const request = axios.post(
      "http://127.0.0.1:4000/add-expense",
      data,
      config
    );

    request.then((response) => {
      history.push("/");
    });
    request.catch((err) => {
      return alert("Dados incorretos");
    });
  }
  return (
    <EntryContainer>
      <h1>Nova Saída</h1>
      <form onSubmit={submit}>
        <Input
          placeholder="Valor"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></Input>
        <Input
          placeholder="Descricao"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></Input>
        <InputButton>Salvar Saída</InputButton>
      </form>
    </EntryContainer>
  );
}
