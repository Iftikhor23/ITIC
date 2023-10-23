import { Container } from "./styles";
import { HeadingOne, Paragraph, TextWrap } from "../../styled/styles";
import CaseComp from "../../components/PortfolioCase/CaseComp";
import { Link } from "react-router-dom";
import Button from "../../components/Reusable/ButtonComb/Button";
import { useEffect, useState } from "react";
import request from "../../services";

function Cases() {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <Container>
      <div className="textWrapper">
        <HeadingOne>Case Studies</HeadingOne>
        <Paragraph>
          Become a member of a freelancer's poo l and work on creative projects
        </Paragraph>
        <Link to={"/allCases"}>
          <div className="respDesk">
            <Button title="See all" iconSize="30px" btnwidth="159px" />
          </div>
        </Link>
      </div>
      <Container.CasesWrapper>
        {cases?.map((items, index) => (
          <CaseComp
            tag={items?.tagsList}
            imageSrc={items?.casePhotoUrl}
            title={items?.client}
            paragraph={items?.projectName}
            to={items?.link}
          />
        ))}
      </Container.CasesWrapper>
      <div className="response">
        <Button title="See all" iconSize="30px" btnwidth="159px" />
      </div>
      <div className="mobile">
        <Button title="See all" iconSize="24px" btnwidth="159px" />
      </div>
    </Container>
  );
}

export default Cases;
