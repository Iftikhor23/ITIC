import { Container } from "./styles";
import { HeadingOne, Paragraph, TextWrap } from "../../styled/styles";
import caseOne from "../../assets/case1.svg";
import caseTwo from "../../assets/case2.svg";
import caseThree from "../../assets/case3.svg";
import CaseComp from "../../components/PortfolioCase/CaseComp";
import { Link } from "react-router-dom";
import Button from "../../components/Reusable/ButtonComb/Button";

function Cases() {
  return (
    <Container>
      <TextWrap>
        <HeadingOne>Case Studies</HeadingOne>
        <Paragraph>
          Become a member of a freelancer's poo l and work on creative projects
        </Paragraph>
        <Link to={"/allCases"}>
          <Button
            title="See all"
            iconSize="30px"
            btnwidth="159px"
          />
        </Link>
      </TextWrap>
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
        <CaseComp
          imageSrc={caseTwo}
          title={"Real estate Chrorium development"}
          paragraph={"Design direction, Ux Ui design"}
        />
        <CaseComp
          imageSrc={caseOne}
          title={"Real estate Chrorium development"}
          paragraph={"Design direction, Ux Ui design"}
        />
        <CaseComp
          imageSrc={caseThree}
          title={"Real estate Chrorium development"}
          paragraph={"Design direction, Ux Ui design"}
        />
      </Container.CasesWrapper>
    </Container>
  );
}

export default Cases;
