import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import MyContext from "./MyContext";
import { useState } from "react";

const App = () => {
  const [active, setactive] = useState("home");
  const [prj,setproj]=useState("")
  return (
    <>
      <MyContext.Provider value={{ active, setactive,prj,setproj }}>
        <Nav />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </MyContext.Provider>
    </>
  );
};

export default App;
