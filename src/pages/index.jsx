import Home from "./Home/Home";
import For from "./For/For";
import About from "./About/About";
import Directions from "../pages/Directions/Directions";
import Cases from "../pages/Portfolio/Cases";
import Employees from "../pages/Team/Employees";
import Branches from "../pages/Branches/Branches";
import Partners from "../pages/Partners/Partners";
import Testimonials from "../pages/Testimonials/Testimonials";
import Careers from "../pages/Careers/Careers";
import Contact from "../pages/Contact/Contact";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import logo from "../assets/images/itLogo.svg";
import Footer from "../components/Footer/Footer";
import SidebarButton from "../components/SidebarButton/sidebarButton";

function Pages() {
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
        translateX: "-1621vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "bottom -1999%",
          scrub: 1,
          pin: true,
          // markers: true
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <img className="logo" src={logo} alt="company logo" />
      <div className="footer">
        <Footer />
      </div>
      <div style={{position: "fixed", zIndex: "19"}}>
        <SidebarButton />
      </div>
      <div className="scrollSectionOuter">
        <div ref={triggerRef}>
          <div ref={sectionRef} className="scrollSectionInner">
            <Home />
            <For />
            <About />
            <Directions />
            <Cases />
            <Employees />
            <Branches />
            <Partners />
            <Testimonials />
            <Careers/>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pages;
