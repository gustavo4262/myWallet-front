import { LogOutOutline } from "react-ionicons";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <h1>Olá, Fulano</h1>
      <Link to="sign-in">
        <LogOutOutline cssClasses="icon"></LogOutOutline>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  color: white;
  font-size: 26px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  h1 {
    margin-top: 7px;
    font-family: "Raleway", sans-serif;
    font-weight: 700;
  }
  .icon {
    height: 40px;
    width: 40px;
    color: white;
  }
`;
