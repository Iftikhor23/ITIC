import { Container } from "./styles";
import buttonIcon from "../../assets/icons/u_angle-right.svg";
import { Link } from "react-router-dom";

function CaseComp({ imageSrc, title, paragraph }) {
  return (
    <Container>
      <img src={imageSrc} alt="case" />
      <Container.Desc>
        <Container.Info>
          <Container.Title>{title}</Container.Title>
          <Container.Parag>{paragraph}</Container.Parag>
        </Container.Info>
        <Link to={"https://talent.itic.uz"} target={"_blank"}>
          <Container.Button>
            <img src={buttonIcon} alt="button icon" />
          </Container.Button>
        </Link>
      </Container.Desc>
    </Container>
  );
}

export default CaseComp;
