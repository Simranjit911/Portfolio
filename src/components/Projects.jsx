import { useContext } from "react";
import MyContext from "../MyContext";
import Project from "./Project";

const Projects = () => {
  let { setactive,setproj,prj } = useContext(MyContext);

  return (
    <div
      className="h-full mx-auto max-w-[1150px] text-white"
      id="projects"
      onMouseEnter={() => setactive("projects")}
      onTouchStart={() => setactive("projects")}
    >
      <p className="text-indigo-300 text-3xl text-center mt-16 my-8 ">
        Projects
      </p>

      <div className=" m-auto flex rounded-xl backdrop-blur-sm  bg-blue-300/20  text-white px-2 py-1 z-10 w-fit">
        <ul className="flex items-center justify-center gap-4 text-white mx-auto w-fit py-1 px-4 text-md ">
          <li>
            <button className={`${prj===""?"active2":""}`} onClick={()=>setproj("")}>All</button>
          </li>
          <li>
            <button className={`${prj==="full"?"active2":""}`}  onClick={()=>setproj("full")}>Full Stack</button>
          </li>
          <li>
            <button className={`${prj==="front"?"active2":""}`}  onClick={()=>setproj("front")}>Frontend</button>
          </li>
        </ul>
      </div>

      <div>
        <Project />
      </div>
    </div>
  );
};

export default Projects;
