import {
  HeadingOne,
  Paragraph,
  ScrollAnimationOne,
  ScrollAnimationTwo,
  TextWrap,
  Wrapper,
} from "../../styled/styles";

import { Container } from "./styles";
import testimonial1 from "../../assets/images/testimonial1.svg";
import testimonial2 from "../../assets/images/testimonial2.svg";
import testimonial3 from "../../assets/images/testimonial3.svg";
import testimonial4 from "../../assets/images/testimonial4.svg";

const Data = [
  {
    id: 1,
    image: testimonial1,
    tName: "G'olib Jamolov",
    companyName: "Najot Ta'lim",
    comment:
      "IT Investment Centre satisfied all of my requests as I wanted. Really Cool",
  },
  {
    id: 2,
    image: testimonial2,
    tName: "Otabek Orziyev",
    companyName: "PDP University",
    comment:
      "IT Investment Centre satisfied all of my requests as I wanted. Really Cool",
  },
  {
    id: 3,
    image: testimonial3,
    tName: "Sherzod Jabborov",
    companyName: "Acharya University",
    comment:
      "IT Investment Centre satisfied all of my requests as I wanted. Really Cool",
  },
  {
    id: 4,
    image: testimonial4,
    tName: "Durbek Asadov",
    companyName: "Uzum",
    comment:
      "IT Investment Centre satisfied all of my requests as I wanted. Really Cool",
  },
];

function Testimonials() {
  return (
    <Container>
      <TextWrap>
        <HeadingOne>Testimonials</HeadingOne>
        <Paragraph color="#121212">
          Become a member of a freelancer's pool and work on creative projects
        </Paragraph>
      </TextWrap>
      <Container.Carousel>
        <Wrapper>
          <ScrollAnimationOne>
            {Data.map(({ id, image, tName, companyName, comment }) => {
              return (
                <Container.TestiBox key={id}>
                  <Container.Above>
                    <img src={image} alt="client" />
                    <div>
                      <h3>{tName}</h3>
                      <p>{companyName}</p>
                    </div>
                  </Container.Above>
                  <div>{comment}</div>
                </Container.TestiBox>
              );
            })}
          </ScrollAnimationOne>
          <ScrollAnimationOne>
            {Data.map(({ id, image, tName, companyName, comment }) => {
              return (
                <Container.TestiBox key={id}>
                  <Container.Above>
                    <img src={image} alt="client" />
                    <div>
                      <h3>{tName}</h3>
                      <p>{companyName}</p>
                    </div>
                  </Container.Above>
                  <div>{comment}</div>
                </Container.TestiBox>
              );
            })}
          </ScrollAnimationOne>
        </Wrapper>
        <Wrapper>
          <ScrollAnimationTwo>
            {Data.map(({ id, image, tName, companyName, comment }) => {
              return (
                <Container.TestiBoxTwo key={id}>
                  <Container.Above>
                    <img src={image} alt="client" />
                    <div>
                      <h3>{tName}</h3>
                      <p>{companyName}</p>
                    </div>
                  </Container.Above>
                  <div>{comment}</div>
                </Container.TestiBoxTwo>
              );
            })}
          </ScrollAnimationTwo>
          <ScrollAnimationTwo>
            {Data.map(({ id, image, tName, companyName, comment }) => {
              return (
                <Container.TestiBoxTwo key={id}>
                  <Container.Above>
                    <img src={image} alt="client" />
                    <div>
                      <h3>{tName}</h3>
                      <p>{companyName}</p>
                    </div>
                  </Container.Above>
                  <div>{comment}</div>
                </Container.TestiBoxTwo>
              );
            })}
          </ScrollAnimationTwo>
        </Wrapper>
      </Container.Carousel>
    </Container>
  );
}

export default Testimonials;
