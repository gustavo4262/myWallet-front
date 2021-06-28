import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import Register from "./Register";

export default function AllRegisters() {
  const [registers, setRegisters] = useState([]);
  const [balancePrice, setBalancePrice] = useState(0);
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    const config = {
      headers: {
        Authorization: user.token,
      },
    };
    const request = axios.get("http://127.0.0.1:4000/registers", config);
    request.then((response) => {
      setRegisters(response.data.registers);
      setBalancePrice(response.data.balancePrice.price);
    });
  }, []);
  return (
    <Container>
      {registers.length ? (
        <>
          {registers.map((register) => (
            <Register key={register.id} register={register}></Register>
          ))}
          <BalanceInfo positive={balancePrice > 0}>
            <strong>Saldo</strong>
            <span>{balancePrice.toFixed(2)}</span>
          </BalanceInfo>
        </>
      ) : (
        <BlankMessage>
          Não há registros de <br />
          entrada ou saída
        </BlankMessage>
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  background-color: white;
  height: 446px;
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 23px 17px;
  overflow-y: scroll;
`;

const BalanceInfo = styled.div`
  align-self: flex-end;
  font-size: 20;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  background-color: black;
  strong {
    position: absolute;
    bottom: 15px;
    font-weight: 700;
  }
  span {
    position: absolute;
    bottom: 15px;
    right: 20px;
    color: ${(props) => (props.positive ? "#03AC00" : "#C70000")};
  }
`;

const BlankMessage = styled.p`
  width: 200px;
  height: 40px;
  font-size: 20px;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  color: #868686;
  margin-top: calc(50% + 20px);
  margin-left: calc(50% - 100px);
`;
