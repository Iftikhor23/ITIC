import { Container } from "./styles";
import closeIcon from "../../assets/icons/close.svg";
import Input from "../InputComponent/Input";
import Button from "../ButtonComb/Button";

function FormModal({ isVisible, onClose }) {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  return (
    <Container onClick={handleClose} id="wrapper">
      <Container.Wrapper>
        <Container.Header>
          <Container.Text>Get Free Consultation</Container.Text>
          <img
            src={closeIcon}
            onClick={() => onClose()}
            style={{ cursor: "pointer" }}
            alt="close icon"
          />
        </Container.Header>
        <Container.Form>
          <Container.Group>
            <Input
              label={"First Name"}
              placeholder={"Enter First Name"}
              type={"text"}
            />
            <Input
              label={"Last Name"}
              placeholder={"Enter Last Name"}
              type={"text"}
            />
          </Container.Group>
          <Container.Group>
            <Input
              label={"Phone Number"}
              placeholder={"Enter Phone Number"}
              type={"tel"}
              prefix={"+998"}
            />
            <Input
              label={"Email Address"}
              placeholder={"Enter Email Address"}
              type={"email"}
            />
          </Container.Group>

          <Input
            label={"Comment"}
            placeholder={"Add Comment"}
            type={"text"}
            width={"652px"}
          />
          <Button title="Submit" fontSize="24px" iconSize="24px"/>
        </Container.Form>
      </Container.Wrapper>
    </Container>
  );
}

export default FormModal;