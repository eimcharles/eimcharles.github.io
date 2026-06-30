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
    duration: "Jan 2019 - Oct 2025",
    summary: "Bachelors of Software Engineering.",
    contributions: [
      {id: "concordia-c1" , text: "Member of C-Edge for Co-Operative Education."}
    ]
  },
  {
    id: "exp-2",
    role: "Software Developer I",
    organization: "Intact Insurance",
    duration: "Sept 2023 - Aug 2024",
    summary: "Permanent Part-time with Contact Billing Team.",
    contributions: [
      {id: "intact-c1" , text: "Developed automated reconciliation tools achieving 100% visibility of inter-agency fund transfers."},
      {id: "intact-c2" , text: "Supported QA processes by conducting acceptance and manual tests."},
      {id: "intact-c3" , text: "Optimized deployment processes by migrating of services to ArgoCD."}
    ]
  },
  {
    id: "exp-3",
    role: "Software Developer Intern",
    organization: "Intact Insurance",
    duration: "May 2023 - Sept 2023",
    summary: "Second internship with Contact Billing Team.",
    contributions: [
      {id: "intact-c4" , text: "Modernized billing services to a contract-first approach with OpenAPI."},
      {id: "intact-c5" , text: "Strengthened the reliability of services through payload validation."},
      {id: "intact-c6" , text: "Improved code quality by developing unit test suites for services."}
    ]
  },
  {
    id: "exp-4",
    role: "Software Developer Intern",
    organization: "Intact Insurance",
    duration: "Jan 2023 - May 2023", 
    summary: "First internship with Contact Billing Team.",
    contributions: [
      {id: "intact-c7" , text: "Refactored service configurations, eliminating dependencies and plugins."},
      {id: "intact-c8" , text: "Contributed to the refinement of the team's engineering backlogs."},
      {id: "intact-c9" , text: "Fostered collaboration and continuous improvement by active participation in Scrum ceremonies."}
    ]
  }
];