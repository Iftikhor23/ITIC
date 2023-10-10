import { Container } from "./styles";
import AdminInput from "../../components/Reusable/AdminInput";
import logo from "../../assets/images/itLogo.svg";
import ButtonComb from "../../components/Reusable/ButtonComb/Button";

function AdminSign() {
  return (
    <Container>
      <Container.Wrapper>
        <Container.Header>
          <img src={logo} alt="logo" />
        </Container.Header>
        <AdminInput label={"Email"} placeholder={"Enter email"} />
        <AdminInput label={"Password"} placeholder={"Enter password"} />
        <ButtonComb
          btnheight="60px"
          btnwidth="200px"
          title="Sign In"
          fontSize="20px"
          aHeight="60px"
          aWidth="60px"
          iconSize="24px"
        />
      </Container.Wrapper>
      <div className="gradient"></div>
    </Container>
  );
}

export default AdminSign;
