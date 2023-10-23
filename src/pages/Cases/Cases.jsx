import { Container } from "./styles";
import { HeadingOne, Paragraph, TextWrap } from "../../styled/styles";
import caseOne from "../../assets/images/case1.svg";
import caseTwo from "../../assets/images/case2.svg";
import caseThree from "../../assets/images/case3.svg";
import CaseComp from "../../components/PortfolioCase/CaseComp";
import { Link } from "react-router-dom";
import Button from "../../components/Reusable/ButtonComb/Button";

function Cases() {
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
        <CaseComp
          imageSrc={caseOne}
          title={"Real estate Chrorium development"}
          paragraph={"Design direction, Ux Ui design"}
        />
        <CaseComp
          imageSrc={caseTwo}
          title={"Real estate Chrorium development"}
          paragraph={"Design direction, Ux Ui design"}
        />
        <CaseComp
          imageSrc={caseThree}
          title={"Real estate Chrorium development"}
          paragraph={"Design direction, Ux Ui design"}
        />
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
