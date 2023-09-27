import { HeadingOne, Paragraph } from "../../styled/styles";
import { Container } from "./styles";
import world from "../../assets/world.svg";

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
          <img src={world} alt="world map" width={"1304px"} height={"643px"} />
        </div>
      </Container.Wrapper>
      {/* <Container.GradientOne></Container.GradientOne>
      <Container.GradientTwo></Container.GradientTwo> */}
    </Container>
  );
}

export default Branches;
