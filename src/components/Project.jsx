import React, { useContext } from "react";
import Data from "./Data";
import MyContext from "../MyContext";
const Project = () => {
  let { setproj, prj } = useContext(MyContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      {Data.filter((d) => {
        return prj.toLowerCase() === "" ? d : d.cat.toLowerCase().includes(prj);
      }).map((d, id) => {
        return (
          // main div
          <div key={id}
            className="px-2 bg-indigo-950 pt-4 flex flex-col md:relative  m-6 h-fit md:h-[350px] lg:h-[300px]  rounded-lg ">
              {/* Image Div */}
            <div className="overflow-hidden cursor-pointer rounded-lg  min-h-[60%]">
              <img src={d.img}
                alt="text"
                className="rounded-lg hover:scale-110 w-full h-full duration-100 object-center"/>
            </div>
            {/* Details */}
            <div className="flex gap-1 flex-col ">
              <p className="text-md md:text-lg active2 px-1 py-0 font-medium ">{d.title}</p>
              <p className="font-normal text-md ms:text-lg px-1">{d.Description}</p>
              <div className="flex gap-1 flex-wrap">
              {d.tech.map((d, id) => {
                return (
                  <span key={id} className=" active2 text-xs md:text-md rounded-md">
                    {d}
                  </span>
                );
              })}
              </div>
            </div>
            {/* Links  */}
              <div className="flex  md:absolute bottom-1  px-1 mt-1 gap-6">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={d.git}
                  className="text-stroke hover:scale-110 duration-100 text-lg">
                  Github
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={d.link}
                  className="text-stroke text-lg hover:scale-105 duration-100">
                  Live Demo
                </a>
              </div>
          </div>
        );
      })}
    </div>
  );
};

export default Project;
