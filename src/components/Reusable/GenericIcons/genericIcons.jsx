import styled from "styled-components";
import { ReactComponent as PlusCircle } from "../../../assets/icons/plus-circle.svg";
import { ReactComponent as Team } from "../../../assets/icons/users.svg";
import { ReactComponent as Partners } from "../../../assets/icons/building.svg";
import { ReactComponent as Vacancy } from "../../../assets/icons/bag.svg";
import { ReactComponent as Resume } from "../../../assets/icons/u_user.svg";
import { ReactComponent as Call } from "../../../assets/icons/forwaded-call.svg";
import { ReactComponent as Testimonials } from "../../../assets/icons/menu.svg";

const CaseIcon = styled(PlusCircle)`
  path {
    fill: ${({ color }) => color && color};
  }
`;

const PartnersIcon = styled(Partners)`
  path {
    fill: ${({ color }) => color && color};
  }
  path {
    fill: ${({ color }) => color && color};
  }
`;

const TeamIcon = styled(Team)`
  path {
    fill: ${({ color }) => color && color};
  }
`;

const VacancyIcon = styled(Vacancy)`
  path {
    fill: ${({ color }) => color && color};
  }
`;

const ResumeIcon = styled(Resume)`
  path {
    fill: ${({ color }) => color && color};
  }
`;

const CallIcon = styled(Call)`
  path {
    fill: ${({ color }) => color && color};
  }
`;

const TestimonialICon = styled(Testimonials)`
  path {
    fill: ${({ color }) => color && color};
  }
`;

export {
  TestimonialICon,
  CallIcon,
  ResumeIcon,
  VacancyIcon,
  TeamIcon,
  PartnersIcon,
  CaseIcon,
};
