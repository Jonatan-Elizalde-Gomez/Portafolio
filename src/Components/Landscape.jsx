import React, { useEffect } from "react";
import sun from "../assets/sol.png";
import fondo from "../assets/fondo.jpg";
import fondo2 from "../assets/fondo2.png";
import fondo3 from "../assets/fondo3.png";

function Landscape() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Mover el sol hacia abajo a una velocidad más lenta
      const sunElement = document.getElementById("sun");
      sunElement.style.transform = `translateY(${
        scrollY * 1.5
      }px) translateX(-50%)`;
      sunElement.style.transition = "transform 1s cubic-bezier(0.3, 1, 0.5, 1)";

      // Mover el fondo 2 hacia arriba a una velocidad más lenta
      const fondo2Element = document.getElementById("fondo2");
      fondo2Element.style.transform = `translateY(${scrollY * -1.5}px)`;
      fondo2Element.style.transition =
        "transform 1s cubic-bezier(0, 0.55, 0.45, 1)"; // ease-out cubic-bezier
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Fondo 1 */}
      <div
        style={{
          backgroundImage: `url(${fondo})`,
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
          position: "absolute",
          zIndex: "-30",
        }}
      />

      {/* Sol */}
      <div
        id="sun"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          paddingTop: "20px",

          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: "-30",
        }}
        className="w-40 md:w-48"
      >
        <img src={sun} alt="Sun" style={{ width: "100%" }} />
      </div>

      {/* Fondo 3 */}
      <div
        style={{
          backgroundImage: `url(${fondo3})`,
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
          position: "absolute",
          zIndex: "-30",
        }}
      />

      {/* Fondo 2 */}
      <div
        id="fondo2"
        style={{
          backgroundImage: `url(${fondo2})`,
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
          position: "fixed",
          top: "400px",
          left: 0,
          zIndex: "-30",
        }}
      />
    </>
  );
}

export default Landscape;
