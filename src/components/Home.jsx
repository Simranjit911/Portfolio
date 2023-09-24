import { useContext } from "react";
import MyContext from "../MyContext";


import "./Home.css";
import vid from "../assets/video.mp4";
import Text from "./Text";
import {AiOutlineArrowRight} from "react-icons/ai"

const Home = () => {
  let { setactive } = useContext(MyContext);

  return (
    
    <div
      className="relative min-h-screen"
      id="home"
      onMouseEnter={() => setactive("home")}
      onTouchStart={() => setactive("home")}
    >
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 object-cover w-full h-full opacity-32 blur-sm"
      >
        <source src={vid} type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="text-white text-center">
          <p className="text-3xl font-meduim my-0.5 text-[#fff] ">
            Hello! I'm{" "}
          </p>
            <h1 className="logo text-4xl md:text-5xl" >
              <span>Si</span>
              <span>mr</span>
              <span>an</span>
              <span>jit</span> <span>S</span>
              <span>in</span>
              <span>gh</span>{" "}
            </h1>

          <p className="text-2xl font-semibold text-[#cb40ff] my-2">
            <Text />
          </p>
          <p className="px-1 text-gray-300">Creating bugs 🐞 since 2020 and off course fixing them too 😁.</p>
        </div>
      </div>
    <div className="text-sm text-stroke absolute right-4 sm:right-10 bottom-8 sm:bottom-16  transform rotate-90 origin-right flex items-center">Scroll to Bottom <AiOutlineArrowRight/></div>
   
      <div className="absolute bottom-0 left-0 w-full h-[50px] bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
    </div>
  );
};

export default Home;
