import { Container } from "./styles";
import { HeadingOne, Paragraph } from "../../styled/styles";
import itPark from "../../assets/itPark.svg";
import finTech from "../../assets/fintech.svg";
import derc from "../../assets/derc.svg";
import tatu from "../../assets/tatu.svg";
import ministry from "../../assets/ministry.svg";
function Partners() {
  return (
    <Container>
      <Container.TextWrap>
        <HeadingOne>Our Partners</HeadingOne>
        <Paragraph color="#121212">
          Become a member of a freelancer's pool and work on creative projects
        </Paragraph>
      </Container.TextWrap>
      <Container.ImgWrap>
        <Container.Img>
          <img src={itPark} alt="it park logo" />
        </Container.Img>
        <Container.Img>
          <img src={derc} alt="derc logo" />
        </Container.Img>
        <Container.Img>
          <img src={ministry} alt="ministry logo" />
        </Container.Img>
        <Container.Img>
          <img src={finTech} alt="fintech logo" />
        </Container.Img>
        <Container.Img>
          <img src={tatu} alt="tuit logo" />
        </Container.Img>
      </Container.ImgWrap>
    </Container>
  );
}

export default Partners;
