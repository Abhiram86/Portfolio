import PythonIcon from "../assets/lang/python-programming-language-icon.svg";
import CIcon from "../assets/lang/c-program-icon.svg";
import CplusCplus from "../assets/lang/c-plus-plus-programming-language-icon.svg";
import JavaScipt from "../assets/lang/javascript-programming-language-icon.svg";
import TypeScript from "../assets/lang/typescript-programming-language-icon.svg";
import MySQL from "../assets/lang/mysql-icon.svg";
import Postgres from "../assets/lang/postgresql-icon.svg";
import MongoDB from "../assets/lang/mongodb-icon.svg";

import ReactLogo from "../assets/frameworks/react-js-icon.svg";
import ReactNative from "../assets/frameworks/react-native-app-icon.svg";
import NextLogo from "../assets/frameworks/nextjs-icon.svg";
import GitLogo from "../assets/frameworks/git-icon.svg";
import TailwindLogo from "../assets/frameworks/tailwind-css-icon.svg";
import ExpressLogo from "../assets/frameworks/express.svg";
import DockerLogo from "../assets/frameworks/docker-icon.svg";
import PytorchLogo from "../assets/frameworks/pytorch.svg";

import LeftIcon from "../assets/icons/left.svg";

export const lang_icons = {
  Python: { name: "Python", imgSrc: PythonIcon },
  C: { name: "C", imgSrc: CIcon },
  Cplusplus: { name: "C++", imgSrc: CplusCplus },
  JavaScript: { name: "JavaScipt", imgSrc: JavaScipt },
  TypeScript: { name: "TypeScript", imgSrc: TypeScript },
  MySQL: { name: "MySQL", imgSrc: MySQL, badge: "basics" },
  Postgres: { name: "Postgres", imgSrc: Postgres, badge: "basics" },
  MongoDB: { name: "MongoDB", imgSrc: MongoDB, badge: "basics" },
};

export const tool_icons = {
  React: { name: "React", imgSrc: ReactLogo },
  ReactNative: { name: "React Native", imgSrc: ReactNative, badge: "basics" },
  Next: { name: "Next", imgSrc: NextLogo },
  Git: { name: "Git", imgSrc: GitLogo, badge: "basics" },
  Tailwind: { name: "Tailwind", imgSrc: TailwindLogo },
  // Drizzle: { name: "Drizzle", imgSrc: DrizzleLogo },
  Express: { name: "Express", imgSrc: ExpressLogo },
  Docker: { name: "Docker", imgSrc: DockerLogo, badge: "basics" },
  Pytorch: { name: "Pytorch", imgSrc: PytorchLogo, badge: "basics" },
};

export const icons = {
  Left: { name: "Left", imgSrc: LeftIcon },
};
