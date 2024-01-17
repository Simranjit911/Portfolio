import { useContext, } from "react";
import MyContext from "../MyContext";

import img1 from "../assets/projectsImages/img2.jpg";

const About = () => {
  let { setactive } = useContext(MyContext);

  return (
    <div
      id="about"
      className="h-full max-w-[1350px] mx-auto mt-8 md:mt-20 text-white"
      onMouseEnter={() => setactive("about")}
      onTouchStart={() => setactive("about")}
    >
      <div>
        <p className="text-center text-indigo-200 text-3xl 	mb-10">About</p>
        <div className="flex ">
          <div className="w-[85%] md:w-[65%] mx-auto text-left tracking-wide text-lg font-extralight flex flex-col gap-5">
            <img
              src={img1}
              alt=""
              className="md:w-[40%] w-[75%] duration-300 ease-in-out grayscale hover:grayscale-0 shadow-xl rounded-md flex items-center justify-center mx-auto"
            />

            <p className="">
              Hello there! I'm{" "}
              <strong className="font-bold">Simranjit Singh</strong> , a
              passionate self taught React JS developer hailing from the vibrant
              tech hub of India. 🇮🇳 Currently, I'm cruising through the
              exhilarating journey of my{" "}
              <strong>Bachelors in Computer Applications,</strong> already in my
              third year. 🎓
            </p>

            <p>
              I enjoy developing, coding, and maintaining clean, professional,
              easy-to-navigate websites. I'm ready to help you achieve your
              dream website!
            </p>
            <p className="hidden md:block">
              🌟 My portfolio showcases not only my technical acumen but also my
              unwavering dedication to creating exceptional user interfaces.
            </p>
            <p>
              Join me on this exciting journey, where the possibilities are
              endless, and the next big project is just a line of code away!
              🌐💼✨
            </p>
            <a
              href="#contact"
              className="bg-indigo-400 delay-100 text-stroke mt-2 border border-transparent text font-light hover:bg-transparent hover:border  w-fit mx-auto text-black px-4 rounded-md  hover:text-indigo-500 hover:border-indigo-500 duration-100 "
            >
              Contact Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
