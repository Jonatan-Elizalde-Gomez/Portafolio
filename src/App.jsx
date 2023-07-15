import sun from "./assets/sol.png";
import fondo from "./assets/Fondo.jpg";
import fondo2 from "./assets/fondo2.png";
import fondo3 from "./assets/fondo3.png";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <>
      <div
        style={{
          height: "100%",
          overflow: "hidden", // Oculta el desplazamiento interno
        }}
      >
        <Parallax pages={3} style={{ height: "100%", top: "0", left: "0" }}>
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
            speed={-1.2}
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
            speed={0.1}
            style={{
              backgroundImage: `url(${fondo2})`,
              backgroundSize: "cover",
              width: "100vw",
              top: "400px",
            }}
          />

          <ParallaxLayer sticky={{ start: 0.92, end: 3 }}>
            <nav className="flex justify-center items-center h-16 bg-backgroundColor border-b">
              <ul className="flex items-center space-x-4">
                <li className="text-lg font-medium">Acerca de mi</li>
                <li className="text-lg font-medium">Habilidades</li>
                <li className="text-lg font-medium">Contacto</li>
              </ul>
            </nav>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.2}
            speed={0}
            style={{
              top: "-100px", // Ajusta el valor para cambiar la posición vertical
            }}
          >
            <div className="bg-backgroundColor">
              <div className="">
                <div className="h-64 w-full">Contenido del contenedor</div>
                <div className="h-64 w-full">Contenido del contenedor</div>
                <div className="h-64 w-full">Contenido del contenedor</div>
                <div className="h-64 w-full">Contenido del contenedor</div>
              </div>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}

export default App;
