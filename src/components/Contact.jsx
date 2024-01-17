import { useContext, useState } from "react";
import MyContext from "../MyContext";
import { BsLinkedin } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiLogoGithub } from "react-icons/bi";
import {AiOutlineArrowRight} from "react-icons/ai"
import "../index.css"

const Contact = () => {
  let { setactive } = useContext(MyContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Contact Inquiry from My Website");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    );
    const mailtoLink = `mailto:simranjit94938@google.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
    // alert("Thanks For Connecting")
    setEmail("");
    setName("");
    setMessage("");
  };
  let mailto = "simranjit94938@gmail.com";
  return (
    <div
      id="contact"
      className="h-fit max-w-[1300px] mx-auto text-white mb-16 relative"
      onMouseEnter={() => setactive("contact")}
      onTouchStart={() => setactive("contact")}
    >
       <a href="#home" className="text-sm text-stroke absolute left-4 sm:left-10 bottom-4 sm:bottom-16  transform -rotate-90 origin-left flex items-center">Back to Top <AiOutlineArrowRight/></a>
      <p className="text-center text-3xl mb-6 md:mb-7 my-6 text-indigo-200">Connect With Me!</p>
      <div className="flex flex-col md:flex-row">
        <div className="mx-auto  grid grid-cols-2 md:grid-cols-1 flex-1">
          <a
            href="https://www.linkedin.com/in/simranjitsingh12/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-1 text-center items-center  justify-center text-lg  my-2 hover:scale-105 duration-100 ">
            <BsLinkedin />
            LinkedIn
          </a>
          <a
            href="https://github.com/Simranjit911"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-1 text-center items-center justify-center text-lg my-3 hover:scale-105 duration-100 hover:active2"
          >
            <BiLogoGithub />
            Github
          </a>
          <a
            href={`mailto:${mailto}`}
            // rel="nofollow"
            // target="_blank"
            className="flex gap-1 text-center items-center justify-center text-lg my-3 hover:scale-105 duration-100"
          >
            <BiLogoGmail />
            Email
          </a>

          <a
            href="#"
            className="flex gap-1 text-center items-center justify-center text-lg my-3 hover:scale-105 duration-100"
          >
            <HiOutlineLocationMarker />
            Punjab,India
          </a>
          <p className="text-center my-4 mb-3 hidden md:block hover:scale-105 duration-100 text-stroke">Simranjit Singh | © 2024</p>
        </div>
        <div className="mx-auto flex-1  p-3">
          <form className="flex flex-col gap-3 " onSubmit={handleSubmit}>
            <input
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
              className="text-gray-300 placeholder:text-gray-200 shadow-2xl bg-transparent  px-2 py-1 border-2 border-indigo-200 focus:border-2 focus:border-indigo-500"
              placeholder="Enter Name"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              className="text-gray-300 placeholder:text-gray-200 shadow-2xl bg-transparent  px-2 py-1 border-2 border-indigo-200 focus:border-2 focus:border-indigo-500"
              placeholder="Enter Email"
            />
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              required
              cols="30"
              rows="8"
              className="text-gray-300 placeholder:text-gray-200 shadow-2xl bg-transparent  px-2 py-1 border-2 border-indigo-200 focus:border-2 focus:border-indigo-500"
              placeholder="Enter Message"
            />
            <button
              type="submit"
              className="text-gray-200  shadow-2xl bg-transparent  px-2 py-1 border-2 border-indigo-200 focus:border-2 hover:border-indigo-500 "
            >
              Submit
            </button>
          </form>
        </div>
             
      </div>
          <p className="text-center mt-2 mb-12 md:hidden block">Simranjit Singh | © 2024</p>
    </div>
  );
};

export default Contact;
