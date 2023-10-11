import { Container, Wrapper } from "./styles";

function AdminInput({ label, placeholder, prefix, lbcolor }) {
  return (
    <Container>
      <Wrapper.Label lbcolor={lbcolor}>{label}</Wrapper.Label>
      <Wrapper>
        <Container.Prefix>{prefix}</Container.Prefix>
        <Wrapper.Input placeholder={placeholder} lbcolor={lbcolor}/>
      </Wrapper>
    </Container>
  );
}

export default AdminInput;
