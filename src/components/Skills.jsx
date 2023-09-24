import { useContext } from "react";
import MyContext from "../MyContext";

import { SiHtml5,SiExpress} from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { BsGit,BsGithub } from "react-icons/bs";
import {
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoRedux,
  BiLogoMongodb,
  BiLogoNodejs,BiLogoFirebase
} from "react-icons/bi";

const Skills = () => {
  let { setactive } = useContext(MyContext);

  return (
    <div
      className="h-fit max-w-[1300px] mx-auto text-white"
      id="skills"
      onMouseEnter={() => setactive("skills")}
      onTouchStart={() => setactive("skills")}
    >
      <p className="text-center  text-3xl text-indigo-200 mt-10 md:mt-20">Skills</p>
      <div className="flex flex-col md:flex-row w-[90%] md:[60%] mx-auto mt-10 gap-3">
        {/* div 1 */}
        <div className="mx-auto rounded-md border-2 border-slate-600 px-4 text-center md:px-16 bg-indigo-950 shadow-xl">
          <p className="m-4 text-xl text-indigo-300">Frontend Development</p>
          <div className="grid grid-cols-2 gap-4 p-3 pb-5  text-lg">
            <p className="flex items-center gap-1">
              <SiHtml5 /> HTML
            </p>
            <p className="flex items-center gap-1">
              <FaCss3 /> CSS
            </p>
            <p className="flex items-center">
              <BiLogoJavascript /> Javascript
            </p>
            <p className="flex items-center">
              <BiLogoTailwindCss /> Tailwind
            </p>
            <p className="flex items-center">
              <BiLogoReact /> React
            </p>
            <p className="flex items-center gap-1">
              <BiLogoRedux /> Redux
            </p>
          </div>
        </div>
        {/* Div 2 */}
        <div className="mx-auto rounded-md border-2 border-slate-600  px-4 md:px-16 bg-indigo-950 shadow-xl">
          <p className="m-4 text-xl text-indigo-300">Backend Development</p>
          <div className="grid grid-cols-2 gap-4 pb-5 p-3 text-lg text-center">
            <p className="flex items-center gap-1">
              <BiLogoNodejs /> NodeJs
            </p>
            <p className="flex items-center gap-1">
              <SiExpress /> ExpressJs
            </p>
            <p className="flex items-center">
              <BiLogoMongodb /> MongoDb
            </p>
            <p className="flex items-center">
              <BiLogoFirebase /> Firebase
            </p>
            <p className="flex items-center gap-1">
              <BsGit /> Git
            </p>
            <p className="flex items-center gap-1">
              <BsGithub /> Github
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
