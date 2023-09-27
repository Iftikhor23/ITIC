import AdminHome from "../../pages/Admin/Home";
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
    id: 8,
    title: "Home",
    icon: <TestimonialICon/>,
    path: '/admin/home',
    hidden: false,
    component: <AdminHome/>
  },
  {
    id: 1,
    title: "Case studies",
    icon: <CaseIcon />,
    path: '/admin/case',
    hidden: false,
  },
  {
    id: 2,
    title: "Resume requests",
    icon: <ResumeIcon/>,
    path: '/admin/resume',
    hidden: false,
  },
  {
    id: 3,
    title: "Call requests",
    icon: <CallIcon/>,
    path: '/admin/req',
    hidden: false,
  },
  {
    id: 4,
    title: "Vacancies",
    icon: <VacancyIcon/>,
    path: '/admin/vacancies',
    hidden: false,
  },
  {
    id: 5,
    title: "Team",
    icon: <TeamIcon/>,
    path: '/admin/team',
    hidden: false,
  },
  {
    id: 6,
    title: "Partners",
    icon: <PartnersIcon/>,
    path: '/admin/partners',
    hidden: false,
  },
  {
    id: 7,
    title: "Testomonirals",
    icon: <TestimonialICon/>,
    path: '/admin/testimonials',
    hidden: false,
  },
 
];
