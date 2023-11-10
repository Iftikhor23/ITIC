import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { useState } from "react";
import "./Job.css";
import JobModal from "../JobModal/JobModal";
import { useEffect } from "react";
import request from "../../services";
import { Link } from "react-router-dom";
import { Container } from "../../pages/Careers/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../../components/ButtonCombVac/Button";
import { NoAvaivable, Text } from "../../pages/AllVacancies/styles";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Job() {
  const [selectedJobTitle, setSelectedJobTitle] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [testomonial, setTestomonial] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("");

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

  useEffect(() => setUrl(window.location.pathname), [window.location.pathname]);

  return (
    <>
      <div className="container">
        {testomonial.slice(0, 4)?.map((items, index) => {
          return (
            <div key={index} className="jobBox">
              <div className="upperPart">
                <div className="jobTitle">
                  <h3>{items?.title}</h3>
                  <p>{items?.positionLevel}</p>
                </div>
                <div className="description">
                  <p>{items?.location}</p>
                  <p>{items?.employmentType}</p>
                  <p>Salary: {items?.salary}</p>
                </div>
              </div>
              <div className="bottomPart">
                <p>{`from: ${items?.fromTime}, to: ${items?.toTime}`}</p>
                <div
                  className="arrow"
                  onClick={() => {
                    setSelectedJobTitle(items?.title);
                    setShowModal(true);
                  }}
                >
                  <FiArrowRight size={"25px"} />
                </div>
              </div>
            </div>
          );
        })}

        {url !== "/allVacancies" && (
          <Link to={"/allVacancies"}>
            <Container.SeeAll>
              <Container.ArrowText>
                See All
                <br /> Vacancies
              </Container.ArrowText>
              <Container.ArrowWrap>
                <Container.Arrow>
                  <FiArrowUpRight size={"25px"} />
                </Container.Arrow>
              </Container.ArrowWrap>
            </Container.SeeAll>
          </Link>
        )}
        <JobModal
          isVisible={showModal}
          onClose={() => setShowModal(false)}
          selectedJobTitle={selectedJobTitle}
        />
      </div>
      <div className="mblRspnsv">
        <Swiper
          centeredSlides={true}
          slidesPerView={1}
          pagination={{ el: "", clickable: true }}
          navigation={{
            nextEl: "simehtin",
            prevEl: "somehint",
          }}
          loop={true}
        >
          {testomonial.slice(0, 4)?.map((items, index) => {
            return (
              <SwiperSlide
                key={items.id}
                style={{
                  display: "flex",
                  alignItems: " center",
                  justifyContent: "center",
                }}
              >
                <div key={index} className="jobBox">
                  <div className="upperPart">
                    <div className="jobTitle">
                      <h3>{items?.title}</h3>
                      <p>{items?.positionLevel}</p>
                    </div>
                    <div className="description">
                      <p>{items?.location}</p>
                      <p>{items?.employmentType}</p>
                      <p>Salary: {items?.salary}</p>
                    </div>
                  </div>
                  <div className="bottomPart">
                    <p>{`from: ${items?.fromTime}, to: ${items?.toTime}`}</p>
                    <div
                      className="arrow"
                      onClick={() => {
                        setSelectedJobTitle(items?.title);
                        setShowModal(true);
                      }}
                    >
                      <FiArrowRight size={"25px"} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default Job;
