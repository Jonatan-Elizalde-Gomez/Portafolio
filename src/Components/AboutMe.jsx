import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function AboutMe() {
  return (
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
  );
}

export default AboutMe;
