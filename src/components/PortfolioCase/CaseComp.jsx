import { Container } from "./styles";
import buttonIcon from "../../assets/icons/u_angle-right.svg";
import { Link } from "react-router-dom";
import request from "../../services";
import { useEffect, useState } from "react";

function CaseComp({ imageSrc, title, paragraph,to}) {
  const [testomonial, setTestomonial] = useState([]);
  const [loading, setLoading] = useState(true);

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
  return (
    <Container>
      <img src={imageSrc} alt="case" />
      <Container.Desc>
        <Container.Info>
          <Container.Title>{title}</Container.Title>
          <Container.Parag>{paragraph}</Container.Parag>
        </Container.Info>
        <Link to={to} target={"_blank"}>
          <Container.Button>
            <img src={buttonIcon} alt="button icon" />
          </Container.Button>
        </Link>
      </Container.Desc>
    </Container>
  );
}

export default CaseComp;
