import styled from "styled-components";
import Header from "./Header";
import AddButtons from "./AddButtons";
import AllRegisters from "./AllRegisters";

export default function HomePage() {
  return (
    <Container>
      <Header></Header>
      <AllRegisters></AllRegisters>
      <AddButtons></AddButtons>
    </Container>
  );
}

const Container = styled.div`
  background-color: #9056bf;
  height: 100vh;
  padding: 25px;
`;
