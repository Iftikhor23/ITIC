import React, { useEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Job from "../../components/Jobs/Job";
import { HeadingOne, Paragraph } from "../../styled/styles";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import { useState } from "react";
import request from "../../services";

function Careers() {
  const [testomonial, setTestomonial] = useState([])
  const [loading, setLoading] = useState(true);
  const careerRef = useRef(null);
  useEffect(() => {
    if (careerRef.current) {
      careerRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const getCallReq = async () => {
    try {
      setLoading(true);
      const res = await request.get(`public/vacancy`);
      setTestomonial(res?.data?.data);
      setLoading(false);
    } catch (error) {
      console.error("Error", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getCallReq();
  }, []);
  console.log(testomonial, 'bu vacancy  ');
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
