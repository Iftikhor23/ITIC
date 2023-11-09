import CaseComp from "../../components/PortfolioCase/CaseComp";
import { HeadingOne, Paragraph } from "../../styled/styles";
import { Container } from "./styles";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import request from "../../services";
import { Link } from "react-router-dom";
import logo from "../../assets/images/itLogo.svg";

function AllCases() {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggerElement = triggerRef.current;
    const sectionElement = sectionRef.current;

    if (triggerElement?.offsetWidth >= 840) {
      const scrollWidth = sectionElement.offsetWidth - window.innerWidth;
      const duration = scrollWidth / 1000; //
      const pinX = gsap.fromTo(
        sectionElement,
        {
          x: 0,
        },
        {
          x: "-350vw",
          ease: "none",
          duration: duration,
          scrollTrigger: {
            trigger: triggerElement,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            pin: true,
          },
        }
      );
      return () => {
        pinX.kill();
      };
    } else {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    }
  }, [triggerRef.current?.offsetWidth >= 840]);

  const getCallReq = async () => {
    try {
      setLoading(true);
      const res = await request.get(`public/case`);
      setCases(res?.data?.data);
      setLoading(false);
    } catch (error) {
      console.error("Error", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getCallReq();
  }, []);

  return (
    <div className="scrollSectionOuter">
      <div ref={triggerRef}>
        <Container ref={sectionRef}>
          <Link to="/">
            <img className="logo" src={logo} alt="company logo" />
          </Link>
          <div className="wrapper">
            <div>
              <HeadingOne>Case studies</HeadingOne>
              <Paragraph>
                Become a member of a freelancer's pool and work on creative
                projects
              </Paragraph>
            </div>
            <Container.Cases>
              {cases?.map((items, index) => (
                <CaseComp
                  key={index}
                  tag={items?.tagsList}
                  imageSrc={items?.casePhotoUrl}
                  title={items?.client}
                  paragraph={items?.projectName}
                  to={items?.link}
                />
              ))}
            </Container.Cases>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default AllCases;
