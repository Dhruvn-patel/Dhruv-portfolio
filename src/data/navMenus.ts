import { INavItem } from "@/types";
import {
  faCircleInfo,
  faHammer,
  faBriefcaseClock,
  faLightbulb,
  faDiagramProject,
  faPaperPlane,
  faAward,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

export const navMenus: INavItem[] = [
  {
    name: "About",
    link: "/#about",
    icon: faUserCircle, // Alternative to faUser
  },
  {
    name: "Services",
    link: "/#services",
    icon: faHammer, // Represents tools/work
  },
  {
    name: "Experiences",
    link: "/#experiences",
    icon: faBriefcaseClock, // Time + work
  },
  {
    name: "Skills",
    link: "/#skills",
    icon: faAward, // Represents knowledge/ideas
  },
  {
    name: "Projects",
    link: "/#projects",
    icon: faDiagramProject, // Represents system/project
  },
  {
    name: "Contact",
    link: "/#contact",
    icon: faPaperPlane, // Represents messaging
  },
];
