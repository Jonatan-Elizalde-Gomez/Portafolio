import sun from "../assets/sol.png";
import fondo from "../assets/fondo.jpg";
import fondo2 from "../assets/fondo2.png";
import fondo3 from "../assets/fondo3.png";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function Landscape() {
  return (
    <>
      {/* Fondo 1 */}
      <ParallaxLayer
        offset={0}
        speed={0}
        style={{
          backgroundImage: `url(${fondo})`,
          backgroundSize: "cover",
          height: "100vh",
          width: "100vw",
          position: "absolute",
        }}
      />

      {/* Sol */}
      <ParallaxLayer
        offset={0}
        speed={-1.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        <img
          src={sun}
          alt="Sun"
          style={{ paddingTop: "20px", width: "1%", minWidth: "200px" }}
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={0}
        speed={0}
        style={{
          backgroundImage: `url(${fondo3})`,
          backgroundSize: "cover",
          height: "100vh",
          width: "100vw",
          position: "absolute",
        }}
      />
      {/* Fondo 2 */}
      <ParallaxLayer
        offset={0}
        speed={0.5}
        style={{
          backgroundImage: `url(${fondo2})`,
          backgroundSize: "cover",
          width: "100vw",
          top: "400px",
        }}
      />
    </>
  );
}

export default Landscape;
