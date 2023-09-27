import employees from "../../assets/employees.svg";
import { Container } from "./styles";
import { HeadingOne, Paragraph } from "../../styled/styles";
import homepicture from "../../assets/homepicture.svg";
import Button from "../../components/ButtonComb/Button";
import FormModal from "../../components/Modal/FormModal";
import { useState } from "react";

function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Container>
        <Container.MidWrap>
          <Container.Wrapper>
            <HeadingOne>Solutions to elevate</HeadingOne>
            <Container.TextWrap>
              <HeadingOne>your</HeadingOne>
              <div onClick={() => setShowModal(true)}>
                <Button
                  title="business"
                  fontSize="56px"
                  btnwidth="298px"
                  btnheight="85px"
                  iconSize="34px"
                  aWidth="85px"
                  aHeight="85px"
                />
              </div>
            </Container.TextWrap>
            <Paragraph width="546px" style={{ marginTop: "27px" }}>
              Connect with growing workforce and companies in the field of
              software development and animation to ensure quality and
              competitive
            </Paragraph>
            <img
              src={employees}
              alt="company employees"
              width={"335px"}
              style={{ marginTop: "33px", zIndex: 1 }}
            />
          </Container.Wrapper>
          <img
            src={homepicture}
            style={{position: "absolute", bottom: "0", right: "30px"}}
            alt="home background"
          />
        </Container.MidWrap>
      <Container.Gradient></Container.Gradient>
      <FormModal isVisible={showModal} onClose={() => setShowModal(false)} />
    </Container>
  );
}

export default Home;
