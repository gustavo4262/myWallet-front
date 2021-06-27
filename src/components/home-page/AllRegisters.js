import { useEffect, useState } from "react";
import styled from "styled-components";

export default function AllRegisters() {
  const [registers, setRegisters] = useState([]);
  const [balancePrice, setBalancePrice] = useState(6.21);
  return (
    <Container>
      {registers.length ? (
        <>
          {registers.map((register) => (
            <Register key={register.id}>
              <RegisterInfo type="date">{register.date}</RegisterInfo>
              <RegisterInfo type="name">{register.name}</RegisterInfo>
              <RegisterInfo type={register.type}>{register.preco}</RegisterInfo>
            </Register>
          ))}
          <BalanceInfo positive={balancePrice > 0}>
            <strong>Saldo</strong>
            <span>{balancePrice}</span>
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

const Register = styled.div`
  height: 40px;
`;

const RegisterInfo = styled.span`
  font-size: 20;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  margin-left: 4px;
  margin-right: ${(props) => props.type === "name" && "100px"};
  color: ${(props) => props.type === "date" && "#C6C6C6"};
  color: ${(props) => props.type === "name" && "#black"};
  color: ${(props) => props.type === "in" && "#03AC00"};
  color: ${(props) => props.type === "out" && "#C70000"};
`;

const BalanceInfo = styled.div`
  font-size: 20;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
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
