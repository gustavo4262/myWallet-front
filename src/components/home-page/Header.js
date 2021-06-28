import { useContext } from "react";
import { LogOutOutline } from "react-ionicons";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";

export default function Header() {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  function logOut() {
    setUser({});
    localStorage.removeItem("user");
    history.push("/sign-in");
  }
  return (
    <Container>
      <h1>Olá, {user.username}</h1>
      <Link to="sign-in" onClick={logOut}>
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
