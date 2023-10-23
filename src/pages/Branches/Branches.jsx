import { HeadingOne, Paragraph } from "../../styled/styles";
import { Container } from "./styles";
import { Fade } from "react-reveal";
import world from "../../assets/images/world.svg";
import soon from "../../assets/images/soon.png";
import uzbekistan from "../../assets/images/uzb.png";
import singapore from "../../assets/images/singapore.png";

function Branches() {
  return (
    <Container>
      <Container.Wrapper>
        <Container.Text>
          <HeadingOne>
            Our branches in different
            <br /> countries
          </HeadingOne>
          <Paragraph>
            Become a member of a freelancer's pool and work on creative projects
          </Paragraph>
        </Container.Text>

        <div className="image">
          <img
            className="worldImage"
            src={world}
            alt="world map"
            width={"1304px"}
            height={"643px"}
          />
          <Fade top delay={1000}>
            <img className="soonUsa" src={soon} alt="location" />
          </Fade>
          <Fade top delay={1500}>
            <img className="soonBra" src={soon} alt="location" />
          </Fade>
          <Fade top delay={100}>
            <img className="uzbLoc" src={uzbekistan} alt="location" />
          </Fade>
          <Fade top delay={550}>
            <img className="sinLoc" src={singapore} alt="location" />
          </Fade>
        </div>
      </Container.Wrapper>
    </Container>
  );
}

export default Branches;
