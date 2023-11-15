import { useEffect } from "react";
import category1 from "../../assets/images/dir1.svg";
import category2 from "../../assets/images/dir2.svg";
import category3 from "../../assets/images/dir3.svg";
import category4 from "../../assets/images/dir4.svg";
import { Paragraph } from "../../styled/styles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Container, HeadingDirection } from "./styles";
import { useRef } from "react";

function Directions() {
  const imageRefs = [useRef(), useRef(), useRef(), useRef()];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    imageRefs.forEach((imageRef, index) => {
      gsap.fromTo(
        imageRef.current,
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top bottom",
          },
        }
      );
    });
  }, [imageRefs]);
  
  
  return (
    <Container id="direction">
      <div className="wrapper">
        <div className="textBox">
          <HeadingDirection>Main Directions</HeadingDirection>
          <Paragraph>
            Become a member of a freelancer's pool and work on creative projects
          </Paragraph>
        </div>
        <Container.Categories>
        <img
            ref={imageRefs[0]}
            src={category1}
            className="catImage"
            alt="category one"
            style={{ transform: "rotate(5deg)" }}
          />
          <img
            ref={imageRefs[1]}
            src={category2}
            className="catImage"
            alt="category two"
            style={{ transform: "rotate(-5deg)" }}
          />
          <img
            ref={imageRefs[2]}
            src={category3}
            className="catImage"
            alt="category three"
            style={{ transform: "rotate(5deg)" }}
          />
          <img
            ref={imageRefs[3]}
            src={category4}
            className="catImage"
            alt="category four"
            style={{ transform: "rotate(-5deg)" }}
          />
        </Container.Categories>
      </div>
    </Container>
  );
}

export default Directions;
