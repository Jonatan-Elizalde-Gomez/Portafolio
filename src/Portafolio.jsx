import NavBar from "./Components/NavBar";
import Landscape from "./Components/Landscape";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";

function Portafolio() {
  return (
    <>
      <Landscape />
      <div style={{ height: "calc(100svh - 60px)" }} />
      <NavBar/>
      <AboutMe/>
      <Projects/>
    </>
  );
}

export default Portafolio;
