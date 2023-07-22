import NavBar from "./Components/NavBar";
import Landscape from "./Components/Landscape";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function Portafolio() {
  return (
    <>
      <Landscape />
      <div style={{ height: "calc(100svh - 60px)" }} />
      <NavBar />
      <AboutMe />
      <section className="shapedividers_com-2143"></section>
      <Projects />
      <div style={{ top: "-80px", position: "relative" }}>
        <section className="shapedividers_com-3482"></section>
        <Contact />
      </div>
    </>
  );
}

export default Portafolio;
