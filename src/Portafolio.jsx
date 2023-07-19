import NavBar from "./Components/NavBar";
import Landscape from "./Components/Landscape";
import AboutMe from "./Components/AboutMe";

function Portafolio() {
  return (
    <>
      <Landscape />
      <div style={{ height: "calc(100svh - 60px)" }} />
      <NavBar></NavBar>
      <AboutMe></AboutMe>
    </>
  );
}

export default Portafolio;
