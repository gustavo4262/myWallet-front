import { useHistory } from "react-router";
import { EntryContainer, Input, InputButton } from "../common/Components";

export default function AddRevenue() {
  const history = useHistory();
  function submit(e) {
    e.preventDefault();
    history.push("/");
  }
  return (
    <EntryContainer>
      <h1>Nova Entrada</h1>
      <form onSubmit={submit}>
        <Input placeholder="Valor"></Input>
        <Input placeholder="Descricao"></Input>
        <InputButton>Salvar Entrada</InputButton>
      </form>
    </EntryContainer>
  );
}
