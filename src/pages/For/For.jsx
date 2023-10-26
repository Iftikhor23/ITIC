import React from "react";
import { Container } from "./styles";
import { HeadingOne, Paragraph } from "../../styled/styles";
import globe from "../../assets/images/globe.png";
import building from "../../assets/images/building.svg";
import freelancer from "../../assets/images/freelancer.svg";
const For=()=> {
  return (
    <Container id="services">
      <Container.Wrapper>
        <Container.Box>
          <Container.Text>
            <Container.Number>01</Container.Number>
            <HeadingOne>Global Customers</HeadingOne>
            <Paragraph width="495px">
              Connect with growing workforce and companies in the field of
              software development and animation to ensure quality and
              competitive price of the final product
            </Paragraph>
          </Container.Text>
          <img className="forImage" src={globe} alt="for" />
        </Container.Box>

        <Container.Box >
          <Container.Text>
            <Container.Number>02</Container.Number>
            <HeadingOne>IT Companies</HeadingOne>
            <Paragraph width="495px">
              Join our network of leading IT companies to export your services
              with our assistance and generate revenue
            </Paragraph>
          </Container.Text>
          <img className="forImage" src={building} alt="for" />
        </Container.Box>

        <Container.Box>
          <Container.Text>
            <Container.Number>03</Container.Number>
            <HeadingOne>Freelancers</HeadingOne>
            <Paragraph width="495px">Become a member of a freelancer's pool and work on creative projects</Paragraph>
          </Container.Text>
          <img className="forImage" src={freelancer} alt="for" />
        </Container.Box>

      </Container.Wrapper>
    </Container>
  );
}

export default For;
