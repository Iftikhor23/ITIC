import React, { useEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Job from "../../components/Jobs/Job";
import { HeadingOne, Paragraph } from "../../styled/styles";
import { Container } from "./styles";
import { Link } from "react-router-dom";

function Careers() {
  const careerRef = useRef(null);
  useEffect(() => {
    if (careerRef.current) {
      careerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <Container id="vacancies" ref={careerRef}>
      <Container.Wrapper>
        <Container.Text>
          <HeadingOne>
            Careers at
            <br /> IT investments Center
          </HeadingOne>
          <Paragraph color="#121212">
            Become a member of a freelancer's pool and work on creative projects
          </Paragraph>
        </Container.Text>
        <Container.Vacancies>
          <Job />
        </Container.Vacancies>
      </Container.Wrapper>
    </Container>
  );
}

export default Careers;
