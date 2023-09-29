import CallRequest from "../../pages/Admin/CallRequest/CallRequest";
import Cases from "../../pages/Admin/Cases";
import AdminHome from "../../pages/Admin/Home";
import Partners from "../../pages/Admin/Partners/Partners";
import Resume from "../../pages/Admin/Resume/Resume";
import Team from "../../pages/Admin/Team/Team";
import Testimonials from "../../pages/Admin/Testimonials/Testimonials";
import Vacancies from "../../pages/Admin/Vacancies/Vacancies";
import AddCase from "../../pages/Admin/Cases/AddCases";


import {
  CaseIcon,
  PartnersIcon,
  TeamIcon,
  VacancyIcon,
  ResumeIcon,
  CallIcon,
  TestimonialICon,
} from "../GenericIcons/genericIcons";

export const Data = [
  {
    id: 1,
    title: "Home",
    icon: <TestimonialICon />,
    path: "/admin/home",
    hidden: false,
    component: <AdminHome />,
  },
  {
    id: 2,
    title: "Case studies",
    icon: <CaseIcon />,
    path: "/admin/case",
    hidden: false,
    component: <Cases />,
  },
  {
    id: 3,
    title: "Resume requests",
    icon: <ResumeIcon />,
    path: "/admin/resume",
    hidden: false,
    component: <Resume />,
  },
  {
    id: 4,
    title: "Call requests",
    icon: <CallIcon />,
    path: "/admin/req",
    hidden: false,
    component: <CallRequest />,
  },
  {
    id: 5,
    title: "Vacancies",
    icon: <VacancyIcon />,
    path: "/admin/vacancies",
    hidden: false,
    component: <Vacancies />,
  },
  {
    id: 6,
    title: "Team",
    icon: <TeamIcon />,
    path: "/admin/team",
    hidden: false,
    component: <Team />,
  },
  {
    id: 7,
    title: "Partners",
    icon: <PartnersIcon />,
    path: "/admin/partners",
    hidden: false,
    component: <Partners />,
  },
  {
    id: 8,
    title: "Testomonirals",
    icon: <TestimonialICon />,
    path: "/admin/testimonials",
    hidden: false,
    component: <Testimonials />,
  },
  {
    id: 9,
    path: "/admin/case/add",
    hidden: true,
    component: <AddCase />,
  },
];
