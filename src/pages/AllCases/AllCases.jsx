import CaseComp from "../../components/PortfolioCase/CaseComp";
import { HeadingOne, Paragraph } from "../../styled/styles";
import { Container } from "./styles";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import request from "../../services";
import SidebarButton from "../../components/SidebarButton/sidebarButton";
import { Link } from "react-router-dom";
import logo from "../../assets/images/itLogo.svg";



function AllCases() {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);

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
        translateX: "-350vw",
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
        <Link to='/'>
      <img className="logo" src={logo} alt="company logo" />
      </Link>
          <div>
          <SidebarButton/>
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
        </Container>
      </div>
    </div>
  );
}

export default AllCases;
