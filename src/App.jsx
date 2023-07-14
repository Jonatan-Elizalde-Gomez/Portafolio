import { useRef } from "react";
import sun from "./assets/sol.png";
import fondo from "./assets/Fondo.jpg";
import fondo2 from "./assets/fondo2.png";
import fondo3 from "./assets/fondo3.png";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  const ref = useRef();

  return (
    <Parallax pages={2} style={{ top: "0", left: "0" }}>
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
        speed={-1.3}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          clip: "rect(0px, 100vw, 100vh, 0px)", // Agrega esta propiedad para ocultar el sol si baja más allá de la capa del fondo 1
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

      <ParallaxLayer offset={1} speed={0}>
        <div className="bg-[#001021]">
          <div className="container mx-auto">
            <div className="h-64">Contenido del contenedor</div>
            <div className="h-64">Contenido del contenedor</div>
            <div className="h-64">Contenido del contenedor</div>
            <div className="h-64">Contenido del contenedor</div>
            <div className="h-64">Contenido del contenedor</div>
          </div>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}

export default App;
