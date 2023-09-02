import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import {
  BiLogoJavascript,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoMongodb,
} from "react-icons/bi";
import { SiExpress, SiStyledcomponents } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { nanoid } from "nanoid";
import cocktailImg from "./assets/cocktail-img.jpg";
import menuImg from "./assets/menu-img.jpeg";

// -------- skills data ---------
const skillsUsingData = [
  { id: nanoid(), name: "HTML5", icon: <AiFillHtml5 />, iconColor: "#e34c26" },
  { id: nanoid(), name: "CSS3", icon: <FaCss3Alt />, iconColor: "#264de4" },
  {
    id: nanoid(),
    name: "JavaScript",
    icon: <BiLogoJavascript />,
    iconColor: "#F0DB4F",
  },
  { id: nanoid(), name: "React js", icon: <FaReact />, iconColor: "#61dbfb" },
  { id: nanoid(), name: "Redux", icon: <BiLogoRedux />, iconColor: "#764abc" },
  {
    id: nanoid(),
    name: "nodejs",
    icon: <FaNodeJs />,
    iconColor: "#3C873A",
  },
];
const skillsLearningData = [
  {
    id: nanoid(),
    name: "TypeScript",
    icon: <BiLogoTypescript />,
    iconColor: "#007acc",
  },
  {
    id: nanoid(),
    name: "GraphQL",
    icon: <GrGraphQl />,
    iconColor: "#e535ab",
  },
  {
    id: nanoid(),
    name: "TailWind",
    icon: <BiLogoTailwindCss />,
    iconColor: "#4dc0b5",
  },
  {
    id: nanoid(),
    name: "expressjs",
    icon: <SiExpress />,
    iconColor: "#303030",
  },
  {
    id: nanoid(),
    name: "mongodb",
    icon: <BiLogoMongodb />,
    iconColor: "#4DB33D",
  },
];

// ----------- projects data ------------
const projects = [
  {
    id: nanoid(),
    image: menuImg,
    title: "e-commerse-site",
    url: "https://a2z-online.netlify.app",
  },
  {
    id: nanoid(),
    image: cocktailImg,
    title: "cocktail db",
    url: "https://cocktail-api-proj.netlify.app/",
  },
  {
    id: nanoid(),
    image: menuImg,
    title: "menus",
    url: "https://menu-service.netlify.app/",
  },
  {
    id: nanoid(),
    image: menuImg,
    title: "tours",
    url: "https://utali.netlify.app/",
  },
  {
    id: nanoid(),
    image: cocktailImg,
    title: "to-do list",
    url: "https://to-do-react-site.netlify.app/",
  },
  {
    id: nanoid(),
    image: menuImg,
    title: "slider",
    url: "https://slidernetapp.netlify.app/",
  },
  {
    id: nanoid(),
    image: menuImg,
    title: "accordion",
    url: "https://accordion-query-app.netlify.app",
  },
  {
    id: nanoid(),
    image: cocktailImg,
    title: "reviews",
    url: "https://reviews-proj.netlify.app/",
  },
  {
    id: nanoid(),
    image: menuImg,
    title: "bash app",
    url: "https://bash-app.netlify.app/",
  },
];

export { skillsUsingData, skillsLearningData, projects };
