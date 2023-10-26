import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import JobModal from "../../components/JobModal copy/JobModal";
import Button from "../../components/Reusable/ButtonComb/Button";
import Job from "../../components/Jobs/Job";
import { HeadingOne, Paragraph, TextWrap } from "../../styled/styles";
import { Container } from "./styles";
import logo from "../../assets/images/itLogo.svg";
import SidebarButton from "../../components/SidebarButton/sidebarButton";
import { Link } from "react-router-dom";

function AllVacancies() {
  const [showModal, setShowModal] = useState(false);

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="scrollSectionOuter">
      <div ref={triggerRef}>
      <Link to='/'>
      <img className="logo" src={logo} alt="company logo" />
      </Link>
        <Container ref={sectionRef}>
          <SidebarButton/>
          <TextWrap>
            <HeadingOne>
              Careers at IT
              <br /> investments Center
            </HeadingOne>
            <Paragraph color="#121212">
              Become a member of a freelancer's pool and work on creative
              projects
            </Paragraph>
          </TextWrap>
          <div style={{ display: "flex", gap: "16px" }}>
            <Job />
            <Container.NoAvaivable>
              <Container.Text>
                If you haven't found any suitable opening vacancies, you can
                register your interest here.
              </Container.Text>
              <Button
                title="Send my resume"
                fontSize="16px"
                btnwidth="170px"
                btnheight="45px"
                aWidth="45px"
                aHeight="45px"
                iconSize="24px"
                onClick={handleOpenModal}
              />
            </Container.NoAvaivable>
          </div>
        </Container>
      </div>
      {showModal && <JobModal isVisible={true} onClose={handleCloseModal} />}
    </div>
  );
}

export default AllVacancies;
