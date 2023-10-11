import globe from "../../assets/images/globe.png";
import building from "../../assets/images/building.svg";
import freelancer from "../../assets/images/freelancer.svg";
import { HeadingOne, Paragraph } from "../../styled/styles";
import { Container } from "./styles";

const Data = [
  {
    id: 1,
    number: "01",
    image: globe,
    title: "Global Customers",
    description:
      "Connect with growing workforce and companies in the field of software development and animation to ensure quality and competitive price of the final product",
  },
  {
    id: 2,
    number: "02",
    image: building,
    title: "IT Companies",
    description:
      "Join our network of leading IT companies to export your services with our assistance and generate revenue",
  },
  {
    id: 3,
    number: "03",
    image: freelancer,
    title: "Freelancers",
    description:
      "Become a member of a freelancer's pool and work on creative projects",
  },
];

function ForItems() {
  return (
    <Container>
      {Data.map(({ id, number, image, title, description }) => {
        return (
          <Container.Wrapper key={id}>
            <Container.Text>
              <Container.Number>{number}</Container.Number>
              <HeadingOne>{title}</HeadingOne>
              <Paragraph width="495px">{description}</Paragraph>
            </Container.Text>
            <img src={image} />
          </Container.Wrapper>
        );
      })}
    </Container>
  );
}

export default ForItems;
