import NavBar from "./Components/NavBar";
import Landscape from "./Components/Landscape";
import AboutMe from "./Components/AboutMe";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function Portafolio() {
  return (
    <>
      <Parallax pages={3}>

        <Landscape />

        <ParallaxLayer sticky={{ start: 0.92, end: 3 }}>
          <NavBar />
        </ParallaxLayer>

        <AboutMe />
      </Parallax>
    </>
  );
}

export default Portafolio;
