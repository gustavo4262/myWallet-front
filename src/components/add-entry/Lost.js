import { useHistory } from "react-router";
import { EntryContainer, Input, InputButton } from "../common/Components";

export default function Lost() {
  const history = useHistory();
  function submit(e) {
    e.preventDefault();
    history.push("/");
  }
  return (
    <EntryContainer>
      <h1>Nova Saída</h1>
      <form onSubmit={submit}>
        <Input placeholder="Valor"></Input>
        <Input placeholder="Descricao"></Input>
        <InputButton>Salvar Saída</InputButton>
      </form>
    </EntryContainer>
  );
}
