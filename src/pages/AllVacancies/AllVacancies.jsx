import Job from "../../components/Jobs/Job";
import { HeadingOne, Paragraph, TextWrap } from "../../styled/styles";
import { Container } from "./styles";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import JobModal from "../../components/JobModal/JobModal";
import Button from "../../components/Reusable/ButtonComb/Button";

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
        translateX: "-1482px",
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

  return (
    <div className="scrollSectionOuter">
      <div ref={triggerRef}>
        <Container ref={sectionRef}>
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
              <div onCLick={() => setShowModal(true)}>
                <Button
                  title="Send my resume"
                  fontSize="16px"
                  btnwidth="170px"
                  btnheight="45px"
                  aWidth="45px"
                  aHeight="45px"
                  iconSize="24px"
                />
              </div>
            </Container.NoAvaivable>
          </div>
        </Container>
      </div>
      <JobModal isVisible={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default AllVacancies;
