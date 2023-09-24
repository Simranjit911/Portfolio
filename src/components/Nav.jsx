import { useContext } from "react";
import  MyContext  from "../MyContext";
import "../index.css"
import {BiHomeAlt,BiMessageRoundedDetail} from "react-icons/bi"
import {BsFillPersonFill} from "react-icons/bs"
import {GiSkills} from "react-icons/gi"
import {MdWork} from "react-icons/md"

const Nav = () => {
    let {active,setactive}=useContext(MyContext)
  return (
    <nav className="fixed block bottom-4 left-0 right-0 m-auto flex rounded-xl backdrop-blur-sm  bg-blue-300/20  text-white px-2 py-2 z-10 w-fit">
      <ul className="flex items-center justify-center gap-4 text-white mx-auto w-fit py-1 px-6 text-xl ">
        <li>
          <a href="#home" onClick={()=>setactive("home")} className={active==="home"?"active":""}><BiHomeAlt/></a>
        </li>
        <li>
          <a href="#about" onClick={()=>setactive("about")} className={active==="about" ?"active":""}><BsFillPersonFill/></a>
        </li>
        <li>
          <a href="#skills" onClick={()=>setactive("skills")} className={active==="skills" ?"active":""}><GiSkills/></a>
        </li>
        <li>
          <a href="#projects" onClick={()=>setactive("projects")} className={active==="projects"?"active":""}><MdWork/></a>
        </li>
        <li>
          <a href="#contact" onClick={()=>setactive("contact")} className={active==="contact"?"active":""}><BiMessageRoundedDetail/></a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
