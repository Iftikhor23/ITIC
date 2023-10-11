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
          <p className="headerText">Build Your Future With Us</p>
        </Container.Header>
        <AdminInput label={"Email"} placeholder={"Enter email"} lbcolor={"#fff"}/>
        <AdminInput label={"Password"} placeholder={"Enter password"} lbcolor={"#fff"}/>
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
    </Container>
  );
}

export default AdminSign;
