import { HeadingOne, Paragraph } from "../../styled/styles";
import { Container } from "./styles";
import { Fade } from "react-reveal";
import world from "../../assets/images/world.svg";
import soon from "../../assets/images/soon.png";
import uzbekistan from "../../assets/images/uzb.png";
import singapore from "../../assets/images/singapore.png";

function Branches() {
  return (
    <Container id="branches">
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
          <img className="soonUsa" src={soon} alt="location" />
          <p className="positiontext1">
            Our branch in USA NewYork will be opened in the near future
          </p>

          <img className="soonBra" src={soon} alt="location" />
          <p className="positiontext2">
            Our branch in USA NewYork will be opened in the near future
          </p>

          <img className="uzbLoc" src={uzbekistan} alt="location" />
          <p className="positiontext">
            Our branch in USA NewYork will be opened in the near future
          </p>

          <img className="sinLoc" src={singapore} alt="location" />
          <p className="positiontext">
            Our branch in USA NewYork will be opened in the near future
          </p>
        </div>
      </Container.Wrapper>
    </Container>
  );
}

export default Branches;
