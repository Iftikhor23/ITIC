import employees from "../../assets/images/employees.svg";
import { Container } from "./styles";
import { HeadingOne, Paragraph } from "../../styled/styles";
import FormModal from "../../components/Modal/FormModal";
import { useState } from "react";
import Button from "../../components/Reusable/ButtonComb/Button";
import { Bounce } from "react-reveal";
import lilChart from "../../assets/images/lilChart.svg";
import middle from "../../assets/images/mid.svg";
import bigChart from "../../assets/images/big.svg";
import up from '../../assets/images/uptrade.svg';
import request from "../../services";
import { useEffect } from "react";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [callData, setCallData] = useState([]);
  const [loading, setLoading] = useState(true);


  const getCallReq = async () => {
    try {
      setLoading(true);
      const res = await request.get(`public/employee`);
      setCallData(res?.data?.data);
      setLoading(false);
    } catch (error) {
      console.error("Error", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getCallReq();
  }, []);
  
  const lengthData = callData.length
  return (
    <Container>
      <Container.MidWrap>
        <Container.Wrapper>
          <Bounce bottom>
            <HeadingOne>Solutions to elevate</HeadingOne>
          </Bounce>
          <Container.TextWrap>
            <Bounce bottom>
              <HeadingOne>your</HeadingOne>
            </Bounce>
            <div onClick={() => setShowModal(true)}>
              <Button
                title="business"
                fontSize="56px"
                btnwidth="298px"
                btnheight="85px"
                iconSize="34px"
                aWidth="85px"
                aHeight="85px"
              />
            </div>
          </Container.TextWrap>
          <Paragraph width="546px" style={{ marginTop: "27px" }}>
            Connect with growing workforce and companies in the field of
            software development and animation to ensure quality and competitive
          </Paragraph>
          <Container.TeamBox className="image-class">
            <>
              {callData.slice(0, 5).map((items, index) => {
                const topPosition = index * 0;
                const leftPosition = index * 50;
                const zindex = 5 - index;
                return (
                  <img
                    key={index}
                    className="employee-image"
                    src={items?.employeePhotoUrl}
                    alt="company employees"
                    width={"80px"}
                    style={{
                      marginTop: "33px",
                      zIndex: `${zindex}`,
                      top: `${topPosition}px`,
                      left: `${leftPosition}px`,
                      borderRadius: "80px",
                      border: "5px solid #04545C",
                    }}
                  />
                );
              })}
              <div className="lastrounded">
                <span>{lengthData}+</span>
              </div>
            </>
          </Container.TeamBox>
        </Container.Wrapper>
        <div className="chart">
          <Bounce bottom>
            <img className="lilChart" src={lilChart} alt="chart" />
          </Bounce>
          <Bounce bottom delay="150">
            <img className="midChart" src={middle} alt="chart" />
          </Bounce>
          <Bounce bottom delay="100">
            <img className="bigChart" src={bigChart} alt="chart" />
          </Bounce>
          <Bounce top delay="400">
            <img className="upTrade" src={up} alt="up arrow" />
          </Bounce>
        </div>
      </Container.MidWrap>
      <FormModal isVisible={showModal} onClose={() => setShowModal(false)} />
    </Container>
  );
}

export default Home;
