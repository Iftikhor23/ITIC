import React from "react";
import { Container } from "./styles";
import RegularButton from "../../../../components/Reusable/RegularButton";
import Button from "../../../../components/Reusable/ButtonComb/Button";
import ImageUpload from "../../../../components/Reusable/ImageUpload";

function AddPartner({ isVisible, onClose }) {
  if (!isVisible) return null;

  const handleCLose = (e) => {
    if (e.target.id === "container") onClose();
  };

  return (
    <Container onClick={handleCLose} id="container">
      <Container.Wrapper>
        <div className="flex">
          <Container.Title>Upload a logo image</Container.Title>
          <div className="buttonWrap">
            <RegularButton title="Cancel" />
            <Button
              title="Add partner"
              btnheight="42px"
              btnwidth="122px"
              fontSize="14px"
              aHeight="42px"
              aWidth="42px"
              iconSize="24px"
            />
          </div>
        </div>
        <ImageUpload inputwidth={"243px"} inputheight={"116px"} />
      </Container.Wrapper>
    </Container>
  );
}

export default AddPartner;
