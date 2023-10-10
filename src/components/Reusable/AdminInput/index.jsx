import { Container, Wrapper } from "./styles";

function AdminInput({ label, placeholder, prefix }) {
  return (
    <Container>
      <Wrapper.Label>{label}</Wrapper.Label>
      <Wrapper>
        <Container.Prefix>{prefix}</Container.Prefix>
        <Wrapper.Input placeholder={placeholder} />
      </Wrapper>
    </Container>
  );
}

export default AdminInput;
