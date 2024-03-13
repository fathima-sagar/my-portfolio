import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { GrServices } from "react-icons/gr";
import emoji from "../assets/images/emoji.png";
import menu from "../assets/images/menu.png";
import grocery from "../assets/images/grocery-bud.png";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Java",
    icon: <FaJava className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "SpringBoot",
    icon: <SiSpringboot className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "MicroServices",
    icon: <GrServices className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: emoji,
    url: "https://emoji-interpreter-reactsite.netlify.app/",
    github: "https://github.com/fathima-sagar",
    title: "emoji interpreter",
    text: "This will interpret emojis. Put an emoji and it will tell what that means.",
  },
  {
    id: nanoid(),
    img: menu,
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/fathima-sagar",
    title: "Menu app",
    text: "A menu site which will filter food on the basis of different options provided.",
  },
  {
    id: nanoid(),
    img: grocery,
    url: "https://grocery-bud-project-react1.netlify.app/",
    github: "https://github.com/fathima-sagar",
    title: "grocery bud",
    text: "A grocery bud to list all your to-do's and completed items",
  },
];
