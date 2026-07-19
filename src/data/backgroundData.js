import { FiBriefcase } from "react-icons/fi";
import { PiArrowBendDownRightThin } from "react-icons/pi";
import { LuCalendarClock, LuSprout } from "react-icons/lu";
import { SiBmcsoftware } from "react-icons/si";

export const backgroundIcons = {
  role: SiBmcsoftware,
  calendar: LuCalendarClock,
  company: FiBriefcase,
  growth: LuSprout,
  arrow: PiArrowBendDownRightThin,
};

export const backgroundData = [
  {
    id: "exp-1",
    role: "B.Eng Software Engineering",
    organization: "Concordia University",
    duration: "Jan 2021 - Oct 2025",
    summary: "Bachelors of Software Engineering",
    contributions: [
      {id: "concordia-c1" , text: "Member of C-Edge for Co-Operative Education."}
    ]
  },
  {
    id: "exp-2",
    role: "Software Developer I",
    organization: "Intact Insurance",
    duration: "Sept 2023 - Aug 2024",
    summary: "Permanent Part-time - Contact Billing Team",
    contributions: [
      {id: "intact-c1" , text: "Achieved 100% visibility of inter-agency fund transfers through the development of automated reconciling tools in Guidewire Billing Center."},
      {id: "intact-c2" , text: "Supported QA processes by conducting acceptance testing and executing manual testing."},
      {id: "intact-c3" , text: "Optimized deployment efficiency by contributing to the migration of microservices to ArgoCD."}
    ]
  },
  {
    id: "exp-3",
    role: "Software Developer Intern",
    organization: "Intact Insurance",
    duration: "May 2023 - Sept 2023",
    summary: "Second internship - Contact Billing Team",
    contributions: [
      {id: "intact-c4" , text: "Modernized microservices to a contract-first approach with OpenAPI."},
      {id: "intact-c5" , text: "Strengthened the reliability of microservices through robust payload validation."},
      {id: "intact-c6" , text: "Achieved full coverage of microservices payload by refactoring and developing unit tests in JUnit."}
    ]
  },
  {
    id: "exp-4",
    role: "Software Developer Intern",
    organization: "Intact Insurance",
    duration: "Jan 2023 - May 2023", 
    summary: "First internship - Contact Billing Team",
    contributions: [
      {id: "intact-c7" , text: "Refactored microservices configurations, managing dependencies, plugins and Swagger documentation."},
      {id: "intact-c8" , text: "Fostered collaboration and continuous improvement by active participation in Scrum ceremonies."},
    ]
  }
];