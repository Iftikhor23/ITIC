
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
        </Container.Data>
      </Container.Wrapper>
    </Container>
  );
}

export default About;
