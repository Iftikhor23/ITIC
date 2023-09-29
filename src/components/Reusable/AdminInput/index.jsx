import { Container, Wrapper } from "./styles";

function AdminInput({ label, placeholder }) {
  return (
    <Container>
      <Wrapper.Label>{label}</Wrapper.Label>
      <Wrapper>
        <Wrapper.Input placeholder={placeholder} />
      </Wrapper>
    </Container>
  );
}

export default AdminInput;
