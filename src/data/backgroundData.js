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
    duration: "2021 - 2025",
    summary: "Bachelor of Software Engineering",
    contributions: [
      {id: "concordia-c1", text: "Relevant Courses: Artificial Intelligence, Data Communication & Computer Networks, Data Structures & Algorithms."},
    ]
  },
  {
    id: "exp-2",
    role: "Software Developer I",
    organization: "Intact Insurance",
    duration: "Sept 2023 - Aug 2024",
    summary: "Permanent Part-Time - Contact Billing Team",
    contributions: [
      {id: "intact-c1", text: "Automated a previously manual, weekly fund transfer reconciliation process for broker partners across Western, Atlantic, and Ontario regions by building tooling in Guidewire BillingCenter, achieving 100% transaction visibility."},
      {id: "intact-c2", text: "Migrated billing services (document generation, scheduling) to ArgoCD-managed GitOps pipelines, standardizing deployment configuration across services."}
    ]
  },
  {
    id: "exp-3",
    role: "Software Developer Intern",
    organization: "Intact Insurance",
    duration: "May 2023 - Sept 2023",
    summary: "Second Internship - Contact Billing Team",
    contributions: [
      {id: "intact-c3", text: "Refactored billing services (policy handling, automated controls) to a contract-first OpenAPI approach, replacing manually maintained client contracts with automated source generation."},
      {id: "intact-c4", text: "Validated the contract-first refactor and service migrations through unit test rework, manual schema testing, and JMeter load testing under varying payload scenarios."}
    ]
  },
  {
    id: "exp-4",
    role: "Software Developer Intern",
    organization: "Intact Insurance",
    duration: "Jan 2023 - May 2023",
    summary: "First Internship - Contact Billing Team",
    contributions: [
      {id: "intact-c5", text: "Standardized service configurations and API documentation practices — including YAML source generation, Swagger cleanup, and dependency and plugin lifecycle management — across 3+ billing services."},
    ]
  }
];