import CountUp from "react-countup";
import { HeadingOne } from "../../styled/styles.js";
import { Container } from "./styles.js";

function About() {
  return (
    <Container>
      <Container.Wrapper>
        <HeadingOne>About Us</HeadingOne>
        <Container.Data>
          <Container.Paragraph>
            Providing intermediary services and connecting companies and
            talented freelancers, ensuring high quality performance and
            affordability. Attracting orders from regions with high demand for
            digital services, and helping to establish service exports among
            local service providers.
          </Container.Paragraph>
            <Container.Nums>
              <Container.NumsItem>
                <Container.NumsNum>
                  +
                  { (
                    <CountUp start={0} end={467} duration={3} delay={0} />
                  )}
                </Container.NumsNum>
                <Container.NumText>Satisfied Customers</Container.NumText>
              </Container.NumsItem>
              <Container.NumsItem>
                <Container.NumsNum>
                  +
                  {(
                    <CountUp start={0} end={13} duration={3} delay={0} />
                  )}
                </Container.NumsNum>
                <Container.NumText>Fields</Container.NumText>
              </Container.NumsItem>
              <Container.NumsItem>
                <Container.NumsNum>
                  +
                  { (
                    <CountUp start={0} end={89} duration={3} delay={0} />
                  )}
                </Container.NumsNum>
                <Container.NumText>Technologies</Container.NumText>
              </Container.NumsItem>
            </Container.Nums>
        </Container.Data>
      </Container.Wrapper>
    </Container>
  );
}

export default About;
