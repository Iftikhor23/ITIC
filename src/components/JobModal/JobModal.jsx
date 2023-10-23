import React from "react";
import { Container } from "./styles";
import closeIcon from "../../assets/icons/close.svg";
import Input from "../InputComponent/Input";
import Button from "../Reusable/ButtonComb/Button";

function JobModal({ isVisible, onClose, selectedJobTitle }) {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  return (
    <Container onClick={handleClose} id="container">
      <Container.Wrapper>
        <Container.Header>
          <Container.Text>Apply on position {selectedJobTitle}</Container.Text>
          <img
            src={closeIcon}
            style={{ cursor: "pointer" }}
            onClick={() => onClose()}
            alt="close icon"
          />
        </Container.Header>
        <Container.Form>
          <Container.Group>
            <Input
              label={"Full Name"}
              placeholder={"Enter Full Name"}
              type={"text"}
            />
            <Input
              label={"Phone Number"}
              placeholder={"Enter Phone Number"}
              type={"number"}
              prefix={"+998"}
            />
          </Container.Group>
          <Container.Group>
            <Input
              label={"LinkedIn Profile Link"}
              placeholder={"Enter LinkedIn Profile Link"}
              type={"text"}
            />
            <Input
              label={"Email Address"}
              placeholder={"Enter Email Address"}
              type={"email"}
            />
          </Container.Group>
          <Container.Group>
            <Input label={"Job Position"} value={selectedJobTitle} readOnly />
            <div className="fileInput">
              <Input
                style={{ opacity: 0 }}
                label={"Attach Your Resume/CV"}
                placeholder={"Upload from files"}
                type={"file"}
              />
            </div>
          </Container.Group>

          <Input
            label={"Comment"}
            placeholder={"Add Comment"}
            type={"text"}
            width={"652px"}
          />
          <Button title="Submit" fontSize="24px" iconSize="24px" />
        </Container.Form>
      </Container.Wrapper>
    </Container>
  );
}

export default JobModal;