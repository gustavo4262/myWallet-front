import styled from "styled-components";
import { AddCircleOutline, RemoveCircleOutline } from "react-ionicons";
import { Link } from "react-router-dom";

export default function AddButtons() {
  return (
    <Container>
      <Link to="/new-revenue">
        <Button>
          <AddCircleOutline cssClasses="icon" />
          <TitleButton>Nova Entrada</TitleButton>
        </Button>
      </Link>
      <Link to="/new-expense">
        <Button>
          <RemoveCircleOutline cssClasses="icon" />
          <TitleButton>Nova Saída</TitleButton>
        </Button>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  .icon {
    height: 40px;
    width: 40px;
    color: white;
  }
`;

const Button = styled.button`
  color: white;
  width: 40vw;
  height: 15vh;
  background-color: #a328d6;
  border: none;
  border-radius: 5px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
`;

const TitleButton = styled.p`
  font-size: 20px;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
`;
