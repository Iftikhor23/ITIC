import category1 from "../../assets/dir1.svg";
import category2 from "../../assets/dir2.svg";
import category3 from "../../assets/dir3.svg";
import category4 from "../../assets/dir4.svg";
import { HeadingOne, Paragraph } from "../../styled/styles";
import { Container } from "./styles";

function Directions() {
  return (
    <Container>
      <div>
        <HeadingOne>Main Directions</HeadingOne>
        <Paragraph>
          Become a member of a freelancer's pool and work on creative projects
        </Paragraph>
      </div>
      <Container.Categories>
        <img src={category1} alt="category one" style={{transform: "rotate(5deg)"}}/>
        <img src={category2} alt="category two" style={{transform: "rotate(-5deg)"}}/>
        <img src={category3} alt="category three" style={{transform: "rotate(5deg)"}}/>
        <img src={category4} alt="category four" style={{transform: "rotate(-5deg)"}}/>
      </Container.Categories>
    </Container>
  );
}

export default Directions;