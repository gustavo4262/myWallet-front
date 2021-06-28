import styled from "styled-components";

export default function Register(props) {
  const { register } = props;
  return (
    <Container key={register.id}>
      <RegisterInfo type="date">{register.date}</RegisterInfo>
      <RegisterInfo type="name">{register.name}</RegisterInfo>
      <RegisterInfo type={register.price > 0 ? "revenue" : "expense"}>
        {Math.abs(register.price).toFixed(2)}
      </RegisterInfo>
    </Container>
  );
}

const Container = styled.div`
  height: 40px;
  position: relative;
`;

const RegisterInfo = styled.span`
  font-size: 20;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  margin-left: 4px;
  max-width: 130px;
  display: inline-block;
  overflow-x: hidden;
  text-overflow: ellipsis;
  margin-right: ${(props) => props.type === "name" && "100px"};
  color: ${(props) => props.type === "date" && "#C6C6C6"};
  color: ${(props) => props.type === "name" && "#black"};
  color: ${(props) => props.type === "revenue" && "#03AC00"};
  color: ${(props) => props.type === "expense" && "#C70000"};
  position: ${(props) =>
    (props.type === "revenue" || props.type === "expense") && "absolute"};
  right: 10px;
`;
