import { Container } from "./styles";
import { HeadingOne, Paragraph } from "../../styled/styles";
import itPark from "../../assets/images/itPark.svg";
import finTech from "../../assets/images/fintech.svg";
import derc from "../../assets/images/derc.svg";
import uzum from "../../assets/images/uzum.svg";
import ministry from "../../assets/images/ministry.svg";
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
          <img className="partnerLogo" src={itPark} alt="it park logo" />
        </Container.Img>
        <Container.Img>
          <img className="partnerLogo" src={derc} alt="derc logo" />
        </Container.Img>
        <Container.Img>
          <img className="partnerLogo" src={ministry} alt="ministry logo" />
        </Container.Img>
        <Container.Img>
          <img className="partnerLogo" src={finTech} alt="fintech logo" />
        </Container.Img>
        <Container.Img>
          <img className="partnerLogo" src={uzum} alt="tuit logo" width={"243px"}/>
        </Container.Img>
      </Container.ImgWrap>
    </Container>
  );
}

export default Partners;
