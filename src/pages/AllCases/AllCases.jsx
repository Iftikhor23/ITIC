import CaseComp from "../../components/PortfolioCase/CaseComp";
import { HeadingOne, Paragraph } from "../../styled/styles";
import { Container } from "./styles";
import caseFour from "../../assets/images/case4.svg";
import caseFive from "../../assets/images/case5.svg";
import caseSix from "../../assets/images/case6.svg";
import caseSeven from "../../assets/images/case7.svg";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function AllCases() {
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
        translateX: "-190vw",
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
          <div>
            <HeadingOne>Case studies</HeadingOne>
            <Paragraph>
              Become a member of a freelancer's pool and work on creative
              projects
            </Paragraph>
          </div>
          <Container.Cases>
            <CaseComp
              imageSrc={caseFour}
              title={"Real estate Chrorium development"}
              paragraph={"Design direction, Ux Ui design"}
            />
            <CaseComp
              imageSrc={caseFive}
              title={"Real estate Chrorium development"}
              paragraph={"Design direction, Ux Ui design"}
            />
            <CaseComp
              imageSrc={caseSix}
              title={"Real estate Chrorium development"}
              paragraph={"Design direction, Ux Ui design"}
            />
            <CaseComp
              imageSrc={caseSeven}
              title={"Real estate Chrorium development"}
              paragraph={"Design direction, Ux Ui design"}
            />
          </Container.Cases>
        </Container>
      </div>
    </div>
  );
}

export default AllCases;
